# app/api/v1/endpoints/property_routes.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.api.deps import get_current_user
from app.db.session import SessionLocal
from app.db.models import Property
from app.schemas.property import PropertyCreate, PropertyUpdate, PropertyResponse

router = APIRouter()

@router.post("/", response_model=PropertyResponse)
def create_property(property_data: PropertyCreate, user_email: str = Depends(get_current_user)):
    db: Session = SessionLocal()
    new_property = Property(**property_data.dict())
    db.add(new_property)
    db.commit()
    db.refresh(new_property)
    return new_property

@router.get("/", response_model=list[PropertyResponse])
def list_properties(user_email: str = Depends(get_current_user)):
    db: Session = SessionLocal()
    return db.query(Property).all()

@router.get("/{property_id}", response_model=PropertyResponse)
def get_property(property_id: int, user_email: str = Depends(get_current_user)):
    db: Session = SessionLocal()
    prop = db.query(Property).filter(Property.id == property_id).first()
    if not prop:
        raise HTTPException(status_code=404, detail="Imóvel não encontrado")
    return prop

@router.put("/{property_id}", response_model=PropertyResponse)
def update_property(property_id: int, property_data: PropertyUpdate, user_email: str = Depends(get_current_user)):
    db: Session = SessionLocal()
    prop = db.query(Property).filter(Property.id == property_id).first()
    if not prop:
        raise HTTPException(status_code=404, detail="Imóvel não encontrado")
    for key, value in property_data.dict(exclude_unset=True).items():
        setattr(prop, key, value)
    db.commit()
    db.refresh(prop)
    return prop

@router.delete("/{property_id}")
def delete_property(property_id: int, user_email: str = Depends(get_current_user)):
    db: Session = SessionLocal()
    prop = db.query(Property).filter(Property.id == property_id).first()
    if not prop:
        raise HTTPException(status_code=404, detail="Imóvel não encontrado")
    db.delete(prop)
    db.commit()
    return {"message": "Imóvel deletado com sucesso"}
