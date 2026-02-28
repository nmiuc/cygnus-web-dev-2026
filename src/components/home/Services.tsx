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
        <section className="py-32 px-6 bg-black relative">
            {/* Section header */}
            <div className="max-w-7xl mx-auto mb-20">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-[2px] w-12 bg-cyan-500" />
                    <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
                        Service_Nodes
                    </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic">
                    {t("title")}
                </h2>
                <p className="mt-6 text-cyan-100/40 text-lg max-w-2xl italic">
                    {t("subtitle")}
                </p>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`group relative p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500 overflow-hidden`}
                    >
                        {/* Background Glow */}
                        <div className={`absolute -top-24 -right-24 w-48 h-48 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${service.color === "cyan" ? "bg-cyan-500" : "bg-purple-500"}`} />

                        <div className="relative z-10 space-y-6">
                            <div className="p-3 inline-block bg-black border border-white/5 group-hover:border-white/20 transition-colors">
                                {service.icon}
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-bold tracking-tight text-white uppercase italic group-hover:text-cyan-400 transition-colors">
                                    {t(`items.${service.id}.title`)}
                                </h3>
                                <p className="text-sm text-cyan-100/40 leading-relaxed font-light italic">
                                    {t(`items.${service.id}.desc`)}
                                </p>
                            </div>

                            <div className="pt-4 flex items-center gap-2 group-hover:translate-x-2 transition-transform duration-300">
                                <span className="text-[10px] font-mono tracking-widest text-cyan-500 uppercase">Explore_Node</span>
                                <div className="h-[1px] w-4 bg-cyan-500" />
                            </div>
                        </div>

                        {/* Decorative side accent */}
                        <div className={`absolute top-0 right-0 w-[1px] h-0 group-hover:h-full transition-all duration-700 ${service.color === "cyan" ? "bg-cyan-500" : "bg-purple-500"}`} />
                    </div>
                ))}
            </div>
        </section>
    );
}
