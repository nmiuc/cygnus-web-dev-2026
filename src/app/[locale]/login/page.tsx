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
import { useAuthStore } from "@/store/auth-store";

export default function LoginPage() {
    const t = useTranslations("Auth");
    const router = useRouter();
    const setUser = useAuthStore((state) => state.setUser);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            setUser(data.user);
            router.push("/dashboard");
        }
    };

    const handleGoogleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: "google",
            options: {
                redirectTo: `${window.location.origin}/auth/callback`,
            },
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden font-sans">
            {/* Background Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />

            <Card className="w-full max-w-md border-cyan-500/20 bg-black/40 backdrop-blur-xl shadow-[0_0_50px_-12px_rgba(13,204,242,0.2)]">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-3xl font-bold tracking-tighter text-white">
                        {t("loginTitle")}
                    </CardTitle>
                    <CardDescription className="text-cyan-400/60">
                        {t("loginSubtitle")}
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <form onSubmit={handleLogin} className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-cyan-100/70">{t("email")}</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="consultant@cygnus.tech"
                                className="bg-black/50 border-cyan-500/30 focus-visible:ring-cyan-500 text-white"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password" title="password" className="text-cyan-100/70">{t("password")}</Label>
                            <Input
                                id="password"
                                type="password"
                                className="bg-black/50 border-cyan-500/30 focus-visible:ring-cyan-500 text-white"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="text-red-400 text-sm">{error}</p>}
                        <Button
                            type="submit"
                            className="w-full bg-cyan-600 hover:bg-cyan-500 text-white shadow-[0_0_15px_rgba(13,204,242,0.4)] transition-all duration-300"
                            disabled={loading}
                        >
                            {loading ? t("loading") : t("loginButton")}
                        </Button>
                    </form>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-cyan-500/20" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-black px-2 text-cyan-500/40">
                                {t("orContinueWith")}
                            </span>
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        className="w-full border-purple-500/30 hover:bg-purple-500/10 text-purple-200"
                        onClick={handleGoogleLogin}
                    >
                        Google
                    </Button>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                    <div className="text-sm text-cyan-100/50 text-center">
                        {t("noAccount")}{" "}
                        <Link href="/register" className="text-cyan-400 hover:underline">
                            {t("registerLink")}
                        </Link>
                    </div>
                </CardFooter>
            </Card>

            {/* Decorative lines */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
        </div>
    );
}
