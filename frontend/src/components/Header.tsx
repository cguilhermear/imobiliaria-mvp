// src/components/Header.tsx
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Imobiliária</h1>
      <nav>
        <Link to="/" className="mr-4 hover:underline">Início</Link>
        <Link to="/properties" className="mr-4 hover:underline">Imóveis</Link>
        <Link to="/property-form" className="hover:underline">Adicionar</Link>
      </nav>
    </header>
  );
};

export default Header;
