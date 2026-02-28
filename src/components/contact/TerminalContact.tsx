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
        <div className="w-full max-w-2xl mx-auto bg-black border border-cyan-500/30 p-8 font-mono text-sm shadow-[0_0_30px_rgba(13,204,242,0.1)]">
            <div className="flex items-center justify-between mb-8 opacity-50 border-b border-white/5 pb-4">
                <span className="text-[10px] uppercase tracking-widest text-cyan-500">Node_Comm_Protocol_Active</span>
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                </div>
            </div>

            <div className="space-y-4">
                <div className="text-cyan-400 mb-6">{t("welcome")}</div>
                <div className="text-cyan-500/40 mb-8 italic">{t("initializing")}</div>

                {/* Completed Steps */}
                {steps.slice(0, step).map((s, idx) => (
                    <div key={idx} className="space-y-1">
                        <div className="text-cyan-500/60 uppercase text-[10px]">{s.prompt}</div>
                        <div className="text-white pl-4 border-l border-cyan-500/20 mb-4">{form[s.key as keyof typeof form]}</div>
                    </div>
                ))}

                {/* Current Step */}
                {!isSuccess && !isSending && (
                    <div className="space-y-2">
                        <div className="text-cyan-400 font-bold">{steps[step].prompt}</div>
                        <div className="flex items-center gap-2 pl-4 border-l-2 border-cyan-500">
                            <span className="text-cyan-500 font-bold tracking-tighter"> {">"} </span>
                            <input
                                ref={inputRef}
                                type="text"
                                className="bg-transparent border-none outline-none text-white w-full placeholder:opacity-20"
                                placeholder="..."
                                value={form[steps[step].key as keyof typeof form]}
                                onChange={(e) => setForm({ ...form, [steps[step].key]: e.target.value })}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                    </div>
                )}

                {/* Status Messages */}
                {isSending && (
                    <div className="pt-8 flex items-center gap-4 text-cyan-400 animate-pulse">
                        <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                        <span>{t("sending")}</span>
                    </div>
                )}

                {isSuccess && (
                    <div className="pt-8 space-y-4">
                        <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold uppercase tracking-widest">
                            {t("success")}
                        </div>
                        <Button
                            variant="outline"
                            className="border-cyan-500/20 text-cyan-100/40 hover:bg-cyan-500/10 text-[10px]"
                            onClick={() => { setStep(0); setIsSuccess(false); setForm({ name: "", email: "", message: "" }); }}
                        >
                            RESET_CONNECTION_QUEUE
                        </Button>
                    </div>
                )}
            </div>

            <div className="mt-12 text-[10px] text-cyan-500/20 text-center uppercase tracking-widest">
                Terminal_Uptime: 104:12:05:01
            </div>
        </div>
    );
}
