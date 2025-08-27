// src/components/PropertyCard.tsx
import React from "react";
import { type Property } from "../types/property";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="property-card border p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{property.title}</h2>
      <p className="mb-1">{property.description}</p>
      <p className="mb-1 font-semibold">Preço: R$ {property.price.toLocaleString()}</p>
      <p className="text-gray-600">
        {property.location} | Área: {property.area ? property.area + "m²" : "N/A"}
      </p>
    </div>
  );
};

export default PropertyCard;
