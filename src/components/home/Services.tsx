"use client";

import { useTranslations } from "next-intl";
import { Server, Shield, Cpu, Layers } from "lucide-react";

export function Services() {
    const t = useTranslations("Home.services");

    const services = [
        {
            id: "virtualization",
            icon: <Server className="w-8 h-8 text-cyan-400" />,
            color: "cyan"
        },
        {
            id: "networking",
            icon: <Shield className="w-8 h-8 text-purple-400" />,
            color: "purple"
        },
        {
            id: "automation",
            icon: <Cpu className="w-8 h-8 text-cyan-400" />,
            color: "cyan"
        },
        {
            id: "infrastructure",
            icon: <Layers className="w-8 h-8 text-purple-400" />,
            color: "purple"
        }
    ];

    return (
        <section className="py-32 px-6 bg-slate-950 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

            {/* Section header */}
            <div className="max-w-7xl mx-auto mb-20">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-[2px] w-12 bg-cyan-500" />
                    <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
                        Service_Nodes
                    </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic text-glow-cyan">
                    {t("title")}
                </h2>
                <p className="mt-6 text-slate-400 text-lg max-w-2xl italic font-light">
                    {t("subtitle")}
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="group relative p-8 bg-glass hover:bg-white/[0.04] transition-all duration-500 overflow-hidden border-white/5 hover:border-cyan-500/30"
                    >
                        {/* Background Glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 blur-[80px] opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-cyan-500" />

                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyan-500/0 group-hover:border-cyan-500 transition-all duration-300" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyan-500/0 group-hover:border-cyan-500 transition-all duration-300" />

                        <div className="relative z-10 space-y-6">
                            <div className="p-3 inline-block bg-slate-900 border border-white/5 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300">
                                {service.icon}
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold tracking-tight text-white uppercase italic group-hover:text-cyan-400 transition-colors">
                                    {t(`items.${service.id}.title`)}
                                </h3>
                                <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-cyan-500/50 to-transparent transition-all duration-500" />
                                <p className="text-sm text-slate-400 leading-relaxed font-light italic">
                                    {t(`items.${service.id}.desc`)}
                                </p>
                            </div>

                            <div className="pt-4 flex items-center justify-between group-hover:translate-x-1 transition-transform duration-300">
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-mono tracking-widest text-cyan-500/40 group-hover:text-cyan-500 uppercase transition-colors">
                                        Access_Node
                                    </span>
                                    <div className="h-[1px] w-4 bg-cyan-500/20 group-hover:bg-cyan-500 transition-colors" />
                                </div>
                                <span className="text-[8px] font-mono text-white/10 group-hover:text-cyan-500/40 uppercase tracking-tighter transition-colors">
                                    Protocol_v2.6
                                </span>
                            </div>
                        </div>

                        {/* Decorative side accent */}
                        <div className="absolute top-0 right-0 w-[1px] h-0 group-hover:h-full transition-all duration-700 bg-cyan-500" />
                    </div>
                ))}
            </div>

        </section>
    );
}
