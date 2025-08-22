import { useEffect, useState } from "react";
import api from "../services/api";
import PropertyForm from "./PropertyForm";

type Property = {
  id: number;
  titulo: string;
  preco: number;
  descricao: string;
};

export default function PropertiesList() {
  const [data, setData] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  const fetchImoveis = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get<Property[]>("/imoveis");
      setData(res.data);
    } catch (err) {
      setError("Não foi possível carregar os imóveis.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImoveis();
  }, []);

  if (loading) return <p style={{ padding: 20 }}>Carregando...</p>;
  if (error) return <p style={{ padding: 20, color: "crimson" }}>{error}</p>;

  return (
    <div style={{ padding: 20, fontFamily: "Arial, sans-serif" }}>
      <PropertyForm onSuccess={fetchImoveis} />
      <h1 style={{ marginBottom: 16 }}>Lista de Imóveis</h1>

      {data.length === 0 ? (
        <p>Nenhum imóvel cadastrado.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {data.map((p) => (
            <li
              key={p.id}
              style={{
                border: "1px solid #e5e5e5",
                borderRadius: 12,
                padding: 12,
                marginBottom: 12,
                boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              }}
            >
              <div style={{ fontWeight: 700 }}>{p.titulo}</div>
              <div>R$ {Number(p.preco).toFixed(2)}</div>
              <div style={{ color: "#555" }}>{p.descricao}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
