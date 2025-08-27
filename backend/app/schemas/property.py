# app/schemas/property.py
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class PropertyCreate(BaseModel):
    title: str
    description: Optional[str]
    price: float
    location: str
    area: Optional[float]

class PropertyUpdate(BaseModel):
    title: Optional[str] = None
    description: Optional[str] = None
    price: Optional[float] = None
    location: Optional[str] = None
    area: Optional[float] = None

class PropertyResponse(PropertyCreate):
    id: int
    created_at: Optional[datetime]

    class Config:
        orm_mode = True
