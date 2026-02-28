"use client";

import { useTranslations } from "next-intl";

export default function AboutPage() {
    const t = useTranslations("About");

    return (
        <div className="min-h-screen bg-black pt-20 pb-32">
            <div className="max-w-4xl mx-auto px-6 space-y-24">
                {/* Header */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-cyan-500" />
                        <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">System_Info</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic leading-[0.8]">
                        {t("title")}
                    </h1>
                </div>

                {/* Content Sections */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-cyan-400 uppercase italic tracking-tight border-b border-cyan-500/20 pb-4">
                            01. {t("mission_title")}
                        </h2>
                        <p className="text-cyan-100/60 leading-relaxed italic text-lg">
                            {t("mission_text")}
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold text-purple-400 uppercase italic tracking-tight border-b border-purple-500/20 pb-4">
                            02. {t("vision_title")}
                        </h2>
                        <p className="text-cyan-100/40 leading-relaxed font-light italic text-lg">
                            {t("vision_text")}
                        </p>
                    </div>
                </section>

                {/* Experience banner */}
                <div className="bg-cyan-500/5 border border-cyan-500/20 p-12 relative overflow-hidden group">
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full group-hover:bg-cyan-500/20 transition-all duration-700" />
                    <div className="relative z-10 space-y-6">
                        <h3 className="text-3xl font-black text-white uppercase italic tracking-tighter">
                            {t("experience_title")}
                        </h3>
                        <p className="text-cyan-100/60 max-w-2xl text-lg font-light">
                            {t("experience_text")}
                        </p>
                    </div>
                </div>

                {/* Decorative footer line */}
                <div className="flex justify-center flex-col items-center gap-6 opacity-20">
                    <div className="h-[60px] w-[1px] bg-gradient-to-b from-cyan-500 to-transparent" />
                    <span className="text-[10px] font-mono tracking-[0.5em] text-cyan-500 uppercase">End_Of_Transmission</span>
                </div>
            </div>
        </div>
    );
}
