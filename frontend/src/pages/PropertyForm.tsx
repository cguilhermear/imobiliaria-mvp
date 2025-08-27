import React, { useState } from "react";
import { type PropertyCreate } from "../types/property";
import { createProperty } from "../services/propertyService";

const PropertyForm: React.FC = () => {
  const [formData, setFormData] = useState<PropertyCreate>({
    title: "",
    description: "",
    price: 0,
    location: "",
    area: 0,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "area" ? Number(value ?? 0) : value ?? "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await createProperty(formData);
      alert("Imóvel criado com sucesso!");
      setFormData({ title: "", description: "", price: 0, location: "", area: 0 });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else if (typeof err === "object" && err !== null && "response" in err) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setError(err.response?.data?.detail || "Erro desconhecido");
      } else {
        setError("Erro desconhecido");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Adicionar Imóvel</h1>
      {error && <p className="text-red-500 mb-2">{error}</p>}

      <input
        type="text"
        name="title"
        placeholder="Título"
        value={formData.title ?? ""}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <textarea
        name="description"
        placeholder="Descrição"
        value={formData.description ?? ""}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      />
      <input
        type="number"
        name="price"
        placeholder="Preço"
        value={formData.price ?? 0}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Localização"
        value={formData.location ?? ""}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <input
        type="number"
        name="area"
        placeholder="Área (m²)"
        value={formData.area ?? 0}
        onChange={handleChange}
        className="w-full p-2 mb-2 border rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
      >
        {loading ? "Enviando..." : "Adicionar Imóvel"}
      </button>
    </form>
  );
};

export default PropertyForm;
