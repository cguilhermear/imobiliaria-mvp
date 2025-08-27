# app/api/v1/endpoints/auth_routes.py
from fastapi import APIRouter, HTTPException
from sqlalchemy.orm import Session
from app.schemas.auth import UserCreate, Token
from app.core.security import verify_password, create_access_token
from app.db.session import SessionLocal
from app.db.models import User

router = APIRouter()

@router.post("/login", response_model=Token)
def login(user: UserCreate):
    db: Session = SessionLocal()
    db_user = db.query(User).filter(User.email == user.email).first()
    if not db_user or not verify_password(user.senha, db_user.senha_hash):
        raise HTTPException(status_code=401, detail="Email ou senha inválidos")
    
    token = create_access_token({"sub": db_user.email})
    return {"access_token": token, "token_type": "bearer"}
