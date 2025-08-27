export interface PropertyBase {
  title: string;
  description?: string | null;
  price: number;
  location: string;
  area?: number | null;
}

export type PropertyCreate = PropertyBase;
export type PropertyUpdate = Partial<PropertyBase>;

export interface Property extends PropertyBase {
  id: number;
  created_at?: string | null;
}
