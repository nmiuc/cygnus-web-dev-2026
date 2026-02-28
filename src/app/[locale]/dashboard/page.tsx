"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/store/auth-store";
import { useRouter } from "@/i18n/routing";

export default function DashboardPage() {
    const t = useTranslations("Dashboard");
    const router = useRouter();
    const { user, signOut } = useAuthStore();
    const [profile, setProfile] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            if (!user) {
                setLoading(false);
                return;
            }

            const { data, error } = await supabase
                .from("profiles")
                .select("*")
                .eq("id", user.id)
                .single();

            if (error) {
                console.error("Error fetching profile:", error);
            } else {
                setProfile(data);
            }
            setLoading(false);
        };

        fetchProfile();
    }, [user]);

    const handleSignOut = async () => {
        await signOut();
        router.push("/login");
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-cyan-500 animate-pulse font-mono tracking-widest text-2xl">
                    CARGANDO_DATOS_SISTEMA...
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black p-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold tracking-tighter text-white uppercase italic">
                        {t("title")}
                    </h1>
                    <Button
                        variant="outline"
                        className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10"
                        onClick={handleSignOut}
                    >
                        {t("signOut")}
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-black/40 border-cyan-500/20 backdrop-blur-xl">
                        <CardHeader>
                            <CardTitle className="text-cyan-400 text-sm">{t("status")}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-white tracking-widest">ONLINE</div>
                            <p className="text-xs text-cyan-500/50 mt-1">Uptime: 99.9%</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-black/40 border-purple-500/20 backdrop-blur-xl">
                        <CardHeader>
                            <CardTitle className="text-purple-400 text-sm">OPERADOR_ACTUAL</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-white tracking-widest truncate">
                                {profile?.full_name || user?.email?.split('@')[0].toUpperCase() || "SISTEMA"}
                            </div>
                            <p className="text-xs text-purple-500/50 mt-1">ID: {user?.id.slice(0, 8)}</p>
                        </CardContent>
                    </Card>

                    <Card className="bg-black/40 border-cyan-500/20 backdrop-blur-xl">
                        <CardHeader>
                            <CardTitle className="text-cyan-400 text-sm">NIVEL_ACCESO</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-white tracking-widest uppercase">
                                {profile?.username ? "ADMIN" : "CONSULTOR"}
                            </div>
                            <p className="text-xs text-cyan-500/50 mt-1">Status: Autorizado</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-12 p-6 border border-cyan-500/20 bg-cyan-500/5 rounded-lg">
                    <p className="text-cyan-100/70 font-mono text-sm">
                        {t("welcomeMessage")} 👋 {profile?.full_name || user?.email}
                    </p>
                </div>
            </div>
        </div>
    );
}
