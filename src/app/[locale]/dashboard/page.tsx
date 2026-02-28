import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/i18n/routing";

export default function DashboardPage() {
    const t = useTranslations("Dashboard");

    return (
        <div className="min-h-screen bg-black p-8 font-sans">
            <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold tracking-tighter text-white uppercase italic">
                        {t("title")}
                    </h1>
                    <Button variant="outline" className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
                        {t("signOut")}
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-black/40 border-cyan-500/20 backdrop-blur-xl">
                        <CardHeader Gallary="Service Health">
                            <CardTitle className="text-cyan-400 text-sm">{t("status")}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-white tracking-widest">ONLINE</div>
                            <p className="text-xs text-cyan-500/50 mt-1">Uptime: 99.9%</p>
                        </CardContent>
                    </Card>

                    {/* Proxmox Node Status Placeholder */}
                    <Card className="bg-black/40 border-purple-500/20 backdrop-blur-xl">
                        <CardHeader Gallary="Active Nodes">
                            <CardTitle className="text-purple-400 text-sm">PROXMOX_CLUSTERS</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-white tracking-widest">03 / 03</div>
                            <p className="text-xs text-purple-500/50 mt-1">All protocols nominal</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-12 p-6 border border-cyan-500/20 bg-cyan-500/5 rounded-lg">
                    <p className="text-cyan-100/70 font-mono text-sm">
                        {t("welcomeMessage")}
                    </p>
                </div>
            </div>
        </div>
    );
}
