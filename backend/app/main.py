# app/main.py
from fastapi import FastAPI
from app.db.models import Base
from app.db.session import engine
from app.api.api import api_router

# Criar tabelas
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="API Imobiliária",
    description="API para gerenciamento de imóveis com autenticação JWT",
    version="1.0.0"
)

# Rota raiz
@app.get("/")
def home():
    return {"message": "API Imobiliária rodando 🚀"}

# Registrar rotas
app.include_router(api_router)
