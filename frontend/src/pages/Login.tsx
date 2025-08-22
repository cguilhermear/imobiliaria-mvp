import { useState } from "react";
import api from "../services/api";

export default function Login({ onLogin }: { onLogin: (token: string) => void }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await api.post("/auth/login", { email, senha });
      const token = res.data.access_token;
      localStorage.setItem("token", token);
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      onLogin(token);
    } catch (err) {
      setError("Email ou senha inválidos");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ display: "block", marginBottom: 10, padding: 8, width: "100%" }}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
        style={{ display: "block", marginBottom: 10, padding: 8, width: "100%" }}
      />
      <button type="submit" disabled={loading} style={{ padding: 10 }}>
        {loading ? "Entrando..." : "Login"}
      </button>
    </form>
  );
}
