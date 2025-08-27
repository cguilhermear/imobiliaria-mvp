// src/services/authService.ts
import api from "./api";

export type LoginResp = { access_token: string; token_type: string };

export async function login(email: string, senha: string): Promise<LoginResp> {
  const resp = await api.post("/auth/login", { email, senha });
  return resp.data;
}

export async function register(email: string, senha: string): Promise<LoginResp> {
  const resp = await api.post("/auth/register", { email, senha });
  return resp.data;
}
