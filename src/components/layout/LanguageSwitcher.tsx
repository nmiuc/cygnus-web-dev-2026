"use client";

import { useLocale, useTranslations } from "next-intl";
import { routing, usePathname, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();

    function onLanguageChange() {
        const nextLocale = locale === "es" ? "en" : "es";
        router.replace(
            // @ts-expect-error -- pathname is correct
            { pathname, params },
            { locale: nextLocale }
        );
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={onLanguageChange}
            className="text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 font-mono text-xs tracking-widest uppercase"
        >
            {locale === "es" ? "EN" : "ES"}
        </Button>
    );
}
