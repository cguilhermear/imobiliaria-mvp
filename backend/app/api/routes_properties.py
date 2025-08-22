from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.api.deps import get_current_user
from app.db.session import SessionLocal
from app.models import Property

router = APIRouter()

@router.get("/imoveis")
def list_properties(user_email: str = Depends(get_current_user)):
    db: Session = SessionLocal()
    return db.query(Property).all()
