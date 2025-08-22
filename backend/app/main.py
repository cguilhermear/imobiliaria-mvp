from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import SessionLocal, engine, Base
from models import Imovel as ImovelModel
from pydantic import BaseModel
from typing import List

app = FastAPI()

# Criar todas as tabelas no banco (se não existirem)
Base.metadata.create_all(bind=engine)

# Dependency para pegar sessão do banco
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Modelo Pydantic para receber dados
class Imovel(BaseModel):
    titulo: str
    preco: float
    descricao: str

    class Config:
        orm_mode = True

# GET: listar imóveis
@app.get("/imoveis", response_model=List[Imovel])
def listar_imoveis(db: Session = Depends(get_db)):
    return db.query(ImovelModel).all()

# POST: adicionar imóvel
@app.post("/imoveis", response_model=Imovel)
def adicionar_imovel(imovel: Imovel, db: Session = Depends(get_db)):
    novo = ImovelModel(**imovel.dict())
    db.add(novo)
    db.commit()
    db.refresh(novo)
    return novo
