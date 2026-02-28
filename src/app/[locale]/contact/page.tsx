import { TerminalContact } from "@/components/contact/TerminalContact";
import { useTranslations } from "next-intl";

export default function ContactPage() {
    const t = useTranslations("Contact");

    return (
        <div className="min-h-screen bg-black pt-20 pb-40">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className="h-[2px] w-12 bg-purple-500" />
                        <span className="text-purple-400 font-mono text-xs tracking-widest uppercase">Direct_Link</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white uppercase italic leading-[0.8] drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                        {t("title")}
                    </h1>
                    <p className="text-xl text-cyan-100/40 max-w-md italic leading-relaxed">
                        Initialize communication protocol to request technical assistance or project vision.
                    </p>

                    <div className="space-y-4 pt-10">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-10 h-10 border border-white/5 bg-white/[0.02] flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                                <div className="w-1 h-1 bg-cyan-400" />
                            </div>
                            <span className="text-xs font-mono text-cyan-100/40 uppercase tracking-widest">Virginia_Beach_Laboratory</span>
                        </div>
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="w-10 h-10 border border-white/5 bg-white/[0.02] flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
                                <div className="w-1 h-1 bg-purple-400" />
                            </div>
                            <span className="text-xs font-mono text-cyan-100/40 uppercase tracking-widest">Secure_Comm_Channel: cygnus@humans.dev</span>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    {/* Decorative halo around terminal */}
                    <div className="absolute -inset-10 bg-cyan-500/5 blur-3xl rounded-full" />
                    <TerminalContact />
                </div>
            </div>
        </div>
    );
}
