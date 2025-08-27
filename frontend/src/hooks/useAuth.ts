import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { login as loginService } from "../services/authService";

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }

  const login = async (email: string, senha: string): Promise<string> => {
    const response = await loginService(email, senha);
    context.login(response.access_token);
    return response.access_token;
  };

  const logout = () => {
    context.logout();
  };

  const isAuthenticated = context.isAuthenticated;
  const token = context.token;

  return { login, logout, isAuthenticated, token };
};
