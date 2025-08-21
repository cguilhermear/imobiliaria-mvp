from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# ⚡ Substitua USER, PASSWORD e DATABASE pelo seu PostgreSQL
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:CAR@localhost/imobiliaria"

# Criação da engine
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Criar sessão (cada requisição vai usar uma sessão)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Base para modelos
Base = declarative_base()
