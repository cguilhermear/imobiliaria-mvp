from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import os
from dotenv import load_dotenv

# Carrega variáveis de ambiente do .env
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

# Conexão com o banco
engine = create_engine(DATABASE_URL)

# Sessão para manipular o banco
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
