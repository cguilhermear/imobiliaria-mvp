import { createContext } from "react";
import type { AuthContextType } from "../types/AuthContextType";

// Contexto puro
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
