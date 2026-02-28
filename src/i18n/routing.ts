import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'es'] as const;

export const routing = {
    locales,
    defaultLocale: 'es',
    localePrefix: 'always' as const
};

export const { Link, redirect, usePathname, useRouter } =
    createNavigation(routing as any);
