import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import PropertiesList from "./pages/PropertiesList";
import PropertyForm from "./pages/PropertyForm";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/imoveis" element={<PropertiesList />} />
          <Route path="/imoveis/novo" element={<PropertyForm />} />
          <Route path="/imoveis/:propertyId" element={<PropertyForm />} />
        </Route>
        <Route path="*" element={<Navigate to="/imoveis" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
