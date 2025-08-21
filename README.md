# Imobiliária MVP

## Descrição
API para cadastro e listagem de imóveis, desenvolvida com FastAPI e PostgreSQL.

## Tecnologias
- Backend: Python + FastAPI
- Banco de dados: PostgreSQL + SQLAlchemy
- Testes: Postman
- Servidor: Uvicorn

## Endpoints
- **GET /imoveis**: Lista todos os imóveis.
- **POST /imoveis**: Cadastra um imóvel.
  - Campos: `titulo`, `preco`, `descricao`

## Como rodar localmente
1. Criar ambiente virtual:
   ```bash
   python -m venv venv

Ativar ambiente virtual:

venv\Scripts\activate


Instalar dependências:

pip install -r requirements.txt


Rodar a API:

uvicorn main:app --reload

Observações

Documentação automática disponível em: http://127.0.0.1:8000/docs