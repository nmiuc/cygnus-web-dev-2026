"use client";

import { useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuthStore } from "@/store/auth-store";

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const { setUser, setSession, setLoading } = useAuthStore();

    useEffect(() => {
        const initializeAuth = async () => {
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);

            const { data: { subscription } } = supabase.auth.onAuthStateChange(
                (_event, session) => {
                    setSession(session);
                    setUser(session?.user ?? null);
                    setLoading(false);
                }
            );

            return () => {
                subscription.unsubscribe();
            };
        };

        initializeAuth();
    }, [setUser, setSession, setLoading]);

    return <>{children}</>;
}
