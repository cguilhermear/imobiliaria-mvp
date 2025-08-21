from sqlalchemy import Column, Integer, String, Float
from database import Base

class Imovel(Base):
    __tablename__ = "imoveis"

    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String, nullable=False)
    preco = Column(Float, nullable=False)
    descricao = Column(String)
