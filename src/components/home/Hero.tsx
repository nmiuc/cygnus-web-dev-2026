"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export function Hero() {
    const t = useTranslations("Home");

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/cygnus_hero_image.png"
                    alt="Technical Lab"
                    fill
                    className="object-cover opacity-40 mix-blend-luminosity"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="inline-block border border-cyan-500/30 bg-cyan-500/5 px-4 py-1 rounded-full">
                        <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-400 uppercase animate-pulse">
                            System_Status: Operational
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic leading-[0.8] drop-shadow-[0_0_15px_rgba(13,204,242,0.3)]">
                        {t("title")}
                    </h1>

                    <p className="text-xl text-cyan-100/60 max-w-xl font-light leading-relaxed italic">
                        {t("subtitle")}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link href="/contact">
                            <Button size="lg" className="bg-cyan-500 text-black hover:bg-white font-black tracking-widest rounded-none h-16 px-10 group relative overflow-hidden">
                                <span className="relative z-10">{t("hero.cta")}</span>
                                <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
                            </Button>
                        </Link>

                        <div className="flex-1 max-w-sm bg-black/60 border border-white/10 backdrop-blur-md p-4 flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                            <div className="font-mono text-[10px] text-cyan-100/40 truncate">
                                <span className="text-cyan-400">{t("hero.terminal_prefix")}</span>
                                <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-cyan-400">
                                    {t("hero.terminal_cmd")}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Element */}
                <div className="hidden lg:flex justify-center items-center relative">
                    <div className="w-64 h-64 border-2 border-cyan-500/20 rounded-full animate-spin-slow" />
                    <div className="absolute w-48 h-48 border border-purple-500/40 rounded-full animate-reverse-spin" />
                    <div className="absolute w-full h-full bg-cyan-500/5 blur-3xl rounded-full" />
                    <div className="absolute text-cyan-400 font-mono text-[8px] tracking-[0.5em] uppercase -rotate-90 origin-center whitespace-nowrap">
                        Precision_Infrastructure_Deployment
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
                <span className="text-[8px] font-mono tracking-widest uppercase text-cyan-500 rotate-90 origin-left">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent" />
            </div>
        </section>
    );
}
