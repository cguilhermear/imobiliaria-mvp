import React, { useEffect, useState } from "react";
import { getProperties } from "../services/propertyService";
import { type Property } from "../types/property";
import PropertyCard from "../components/PropertyCard";

const PropertiesList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getProperties();
        setProperties(data ?? []);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else if (typeof err === "object" && err !== null && "response" in err) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          setError(err.response?.data?.detail || "Erro ao carregar imóveis");
        } else {
          setError("Erro ao carregar imóveis");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) return <p>Carregando imóveis...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="properties-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
};

export default PropertiesList;
