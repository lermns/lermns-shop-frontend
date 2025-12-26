import { create } from "zustand";
import { loginAction } from "../action/login.action";
import type { User } from "@/interfaces/user.interface";

type AuthStatus = "authenticated" | "not-authenticated" | "checking";

type AuthState = {
    // Properties 
    user: User | null,
    token: string | null,
    authStatus: AuthStatus,
    // Getters

    // Actions 
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
    // implementation store 
    user: null,
    token: null,
    authStatus: "checking",

    //Action 
    login: async (email, password) => {
        console.log({ email, password });
        try {
            const data = await loginAction(email, password);
            localStorage.setItem("token", data.token);
            set({ user: data.user, token: data.token });
            return true;
        } catch (error) {
            localStorage.removeItem("token");
            set({ user: null, token: null });
            return false;
        }
    },

    logout: () => {
        localStorage.removeItem("token");
        set({ user: null, token: null });
    }

}));