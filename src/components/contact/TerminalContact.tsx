"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export function TerminalContact() {
    const t = useTranslations("Contact.terminal");
    const [step, setStep] = useState(0);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [isSending, setIsSending] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [step]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            if (step < 2 && (inputRef.current?.value || "").length > 0) {
                setStep(step + 1);
            } else if (step === 2 && (inputRef.current?.value || "").length > 0) {
                handleSubmit();
            }
        }
    };

    const handleSubmit = async () => {
        setIsSending(true);
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSending(false);
        setIsSuccess(true);
    };

    const steps = [
        { key: "name", prompt: t("prompt_name") },
        { key: "email", prompt: t("prompt_email") },
        { key: "message", prompt: t("prompt_message") }
    ];

    return (
        <div className="w-full max-w-2xl mx-auto bg-black/90 border border-cyan-500/30 p-8 font-mono text-sm shadow-[0_0_30px_rgba(13,204,242,0.1)] relative overflow-hidden group">
            {/* Terminal Scanline Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%]" />

            {/* Flickering effect */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-cyan-500 animate-pulse z-40" />

            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4 relative z-10">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-cyan-400">Cygnus_Terminal_v1.0.4</span>
                </div>
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full border border-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full border border-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-500/20" />
                </div>
            </div>

            <div className="space-y-6 relative z-10 min-h-[300px]">
                <div className="space-y-1">
                    <div className="text-cyan-400/60 leading-tight"># {t("welcome")}</div>
                    <div className="text-cyan-500/30 italic text-xs"># {t("initializing")}... [OK]</div>
                </div>

                {/* Completed Steps */}
                {steps.slice(0, step).map((s, idx) => (
                    <div key={idx} className="space-y-1 animate-in fade-in slide-in-from-left-2 duration-300">
                        <div className="flex items-center gap-2">
                            <span className="text-cyan-500/40 font-bold">$</span>
                            <span className="text-cyan-500/60 uppercase text-[10px] tracking-widest">{s.prompt}</span>
                        </div>
                        <div className="text-white pl-4 border-l border-cyan-500/20 mb-4 font-bold tracking-tight">
                            {form[s.key as keyof typeof form]}
                        </div>
                    </div>
                ))}

                {/* Current Step */}
                {!isSuccess && !isSending && (
                    <div className="space-y-3 animate-in fade-in duration-500">
                        <div className="flex items-center gap-2">
                            <span className="text-cyan-400 font-bold animate-pulse">{">"}</span>
                            <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs">
                                {steps[step].prompt}
                            </span>
                        </div>
                        <div className="flex items-center gap-2 pl-4 border-l-2 border-cyan-500 bg-cyan-500/5 py-2">
                            <input
                                ref={inputRef}
                                type="text"
                                className="bg-transparent border-none outline-none text-cyan-50 w-full placeholder:text-cyan-500/20 caret-cyan-400"
                                placeholder="type_here..."
                                value={form[steps[step].key as keyof typeof form]}
                                onChange={(e) => setForm({ ...form, [steps[step].key]: e.target.value })}
                                onKeyDown={handleKeyDown}
                                autoFocus
                            />
                        </div>
                    </div>
                )}

                {/* Status Messages */}
                {isSending && (
                    <div className="pt-12 flex flex-col items-center gap-4 text-cyan-400">
                        <div className="w-12 h-1 bg-white/5 overflow-hidden relative">
                            <div className="absolute inset-0 bg-cyan-500 animate-progress" />
                        </div>
                        <span className="text-[10px] font-mono tracking-[0.4em] animate-pulse">{t("sending")}</span>
                    </div>
                )}

                {isSuccess && (
                    <div className="pt-12 space-y-6 animate-in zoom-in-95 duration-500">
                        <div className="p-6 bg-cyan-500/5 border border-cyan-500/30 rounded-sm">
                            <div className="text-cyan-400 font-bold uppercase tracking-[0.2em] text-center text-xs mb-2">
                                [ {t("success")} ]
                            </div>
                            <div className="text-[10px] text-cyan-500/40 text-center font-mono italic">
                                Transmission_ID: {Math.random().toString(36).substring(7).toUpperCase()}
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            className="w-full border border-cyan-500/10 text-cyan-500/40 hover:text-cyan-400 hover:bg-cyan-500/5 text-[10px] tracking-[0.3em] font-mono"
                            onClick={() => { setStep(0); setIsSuccess(false); setForm({ name: "", email: "", message: "" }); }}
                        >
                            {">"} REBOOT_SESSION
                        </Button>
                    </div>
                )}
            </div>

            <div className="mt-16 flex items-center justify-between text-[8px] text-cyan-500/20 font-mono uppercase tracking-[0.3em]">
                <div>Loc: 36.8529° N, 75.9780° W</div>
                <div>UPTIME: 99.98%</div>
            </div>
        </div>
    );
}

