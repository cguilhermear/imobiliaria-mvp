import { useState } from "react";
import api from "../services/api";

export default function PropertyForm({ onSuccess }: { onSuccess: () => void }) {
  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await api.post("/imoveis", {
        titulo,
        preco: Number(preco),
        descricao,
      });
      setTitulo("");
      setPreco("");
      setDescricao("");
      onSuccess(); // atualiza a lista
    } catch (err) {
      console.error(err);
      setError("Erro ao cadastrar imóvel.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h2>Cadastrar Imóvel</h2>
      {error && <p style={{ color: "crimson" }}>{error}</p>}
      <div style={{ marginBottom: 10 }}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
          style={{ padding: 8, width: "100%" }}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
          style={{ padding: 8, width: "100%" }}
        />
      </div>
      <div style={{ marginBottom: 10 }}>
        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
          style={{ padding: 8, width: "100%" }}
        />
      </div>
      <button type="submit" disabled={loading} style={{ padding: 10 }}>
        {loading ? "Cadastrando..." : "Cadastrar"}
      </button>
    </form>
  );
}
