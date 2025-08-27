// src/services/propertyService.ts
import api from "./api";
import type { PropertyCreate, PropertyUpdate, Property } from "../types/property";

export const getProperties = async (): Promise<Property[]> => {
  const resp = await api.get("/imoveis");
  return resp.data;
};

export const createProperty = async (property: PropertyCreate): Promise<Property> => {
  const resp = await api.post("/imoveis", property);
  return resp.data;
};

export const updateProperty = async (id: number, property: PropertyUpdate): Promise<Property> => {
  const resp = await api.put(`/imoveis/${id}`, property);
  return resp.data;
};

export const deleteProperty = async (id: number): Promise<{ message: string }> => {
  const resp = await api.delete(`/imoveis/${id}`);
  return resp.data;
};
