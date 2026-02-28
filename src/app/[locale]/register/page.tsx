"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { useRouter } from "@/i18n/routing";

export default function RegisterPage() {
    const t = useTranslations("Auth");
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName,
                },
            },
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            router.push("/login?message=check-email");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden font-sans">
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />

            <Card className="w-full max-w-md border-purple-500/20 bg-black/40 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(127,11,244,0.2)]">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-3xl font-bold tracking-tighter text-white">
                        {t("registerTitle")}
                    </CardTitle>
                    <CardDescription className="text-purple-400/60">
                        {t("registerSubtitle")}
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <form onSubmit={handleRegister} className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="fullName" className="text-purple-100/70">Nombre / Name</Label>
                            <Input
                                id="fullName"
                                type="text"
                                placeholder="John Doe"
                                className="bg-black/50 border-purple-500/30 focus-visible:ring-purple-500 text-white"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-purple-100/70">{t("email")}</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="consultant@cygnus.tech"
                                className="bg-black/50 border-purple-500/30 focus-visible:ring-purple-500 text-white"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password" title="password" className="text-purple-100/70">{t("password")}</Label>
                            <Input
                                id="password"
                                type="password"
                                className="bg-black/50 border-purple-500/30 focus-visible:ring-purple-500 text-white"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="text-red-400 text-sm">{error}</p>}
                        <Button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_15px_rgba(127,11,244,0.4)] transition-all duration-300"
                            disabled={loading}
                        >
                            {loading ? t("loading") : t("registerButton")}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter>
                    <div className="text-sm text-purple-100/50 text-center w-full">
                        {t("haveAccount")}{" "}
                        <Link href="/login" className="text-purple-400 hover:underline">
                            {t("loginButton")}
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
