import { createContext } from "react";
import type { AuthContextType } from "./AuthProviders";

export const AuthContext = createContext<AuthContextType | null>(null);
