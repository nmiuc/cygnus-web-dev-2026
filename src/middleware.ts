import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['en', 'es'],

    // Used when no locale matches
    defaultLocale: 'es',

    // Detección automática del navegador
    localeDetection: true
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(es|en)/:path*']
};
