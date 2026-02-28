"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth-store";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Navbar() {
    const t = useTranslations("Nav");
    const { user, signOut } = useAuthStore();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/5",
                scrolled ? "bg-black/80 backdrop-blur-xl py-3" : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="group flex items-center space-x-2">
                    <div className="w-8 h-8 relative">
                        <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
                        <div className="relative w-full h-full border-2 border-cyan-400 rotate-45 flex items-center justify-center overflow-hidden">
                            <span className="text-cyan-400 font-bold -rotate-45 text-xs">C</span>
                        </div>
                    </div>
                    <span className="text-xl font-black tracking-[0.2em] text-white uppercase italic group-hover:text-cyan-400 transition-colors">
                        CYGNUS
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center space-x-8">
                    <NavLink href="/">{t("home")}</NavLink>
                    <NavLink href="/services">{t("services")}</NavLink>
                    <NavLink href="/about">{t("about")}</NavLink>
                    <NavLink href="/contact">{t("contact")}</NavLink>
                </div>

                {/* Actions */}
                <div className="flex items-center space-x-4">
                    <LanguageSwitcher />

                    {user ? (
                        <div className="flex items-center space-x-4">
                            <Link href="/dashboard" className="text-xs font-mono text-cyan-400 hover:text-white transition-colors">
                                {t("dashboard")}
                            </Link>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => signOut()}
                                className="text-xs text-purple-400 hover:text-white"
                            >
                                [X]
                            </Button>
                        </div>
                    ) : (
                        <Link href="/login">
                            <Button size="sm" className="bg-cyan-500 text-black hover:bg-white font-bold tracking-tighter rounded-none px-6">
                                {t("login")}
                            </Button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-xs font-mono tracking-widest text-cyan-100/60 hover:text-cyan-400 transition-colors relative group"
        >
            {children}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full" />
        </Link>
    );
}
