"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function Footer() {
    const t = useTranslations("Footer");

    return (
        <footer className="bg-black border-t border-cyan-500/10 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2 space-y-6">
                        <span className="text-2xl font-black tracking-[0.3em] text-white italic">CYGNUS</span>
                        <p className="text-cyan-100/40 text-sm leading-relaxed max-w-md italic">
                            {t("mission")}
                        </p>
                        <div className="flex items-center space-x-2 text-xs font-mono text-cyan-500/60 uppercase tracking-[0.2em]">
                            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                            <span>{t("location")}</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white text-xs font-black tracking-widest uppercase">Protocols</h4>
                        <div className="flex flex-col space-y-2">
                            <FooterLink href="/privacy">{t("links.privacy")}</FooterLink>
                            <FooterLink href="/terms">{t("links.terms")}</FooterLink>
                            <FooterLink href="/status">{t("links.status")}</FooterLink>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-white text-xs font-black tracking-widest uppercase">Connect</h4>
                        <div className="flex flex-col space-y-2 text-xs font-mono text-cyan-100/40">
                            <span className="hover:text-cyan-400 cursor-pointer transition-colors">GITHUB_REPO</span>
                            <span className="hover:text-cyan-400 cursor-pointer transition-colors">LINKEDIN_CORE</span>
                            <span className="hover:text-cyan-400 cursor-pointer transition-colors">TERMINAL_SECURE</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono tracking-widest text-cyan-500/30 uppercase">
                    <span>{t("rights")}</span>
                    <span className="mt-4 md:mt-0">Design & Vision by Cygnus AI</span>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="text-xs font-mono text-cyan-100/40 hover:text-cyan-400 transition-colors">
            {children}
        </Link>
    );
}
