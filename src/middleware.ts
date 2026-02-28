import createMiddleware from 'next-intl/middleware';
import { createServerClient, type CookieOptions } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import { routing } from './i18n/routing';

export default async function middleware(request: NextRequest) {
    // 1. Initial i18n middleware
    const i18nMiddleware = createMiddleware(routing);
    const response = i18nMiddleware(request);

    // 2. Supabase Session Handler
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return request.cookies.get(name)?.value;
                },
                set(name: string, value: string, options: CookieOptions) {
                    request.cookies.set({ name, value, ...options });
                    response.cookies.set({ name, value, ...options });
                },
                remove(name: string, options: CookieOptions) {
                    request.cookies.set({ name, value: '', ...options });
                    response.cookies.set({ name, value: '', ...options });
                },
            },
        }
    );

    const { data: { user } } = await supabase.auth.getUser();

    // 3. Protected Routes Logic
    const pathname = request.nextUrl.pathname;
    const isProtectedRoute = pathname.includes('/dashboard') || pathname.includes('/backoffice');

    if (isProtectedRoute && !user) {
        const locale = pathname.split('/')[1] || 'es';
        return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
    }

    return response;
}

export const config = {
    matcher: ['/', '/(es|en)/:path*', '/((?!_next/static|_next/image|favicon.ico).*)']
};
