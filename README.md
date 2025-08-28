# 🏠 Imobiliária MVP

[![Python](https://img.shields.io/badge/Python-3.11-blue)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.95-green)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 📖 Descrição
O Imobiliária MVP é um projeto fullstack para gerenciamento de imóveis, com autenticação JWT, CRUD completo e integração entre React + TypeScript (frontend) e FastAPI + SQLAlchemy + PostgreSQL (backend).

Funcionalidades principais:

Cadastro e login de usuários via JWT

CRUD de imóveis (criar, listar, editar, deletar)

Persistência de token via localStorage

Rotas protegidas com <ProtectedRoute />

Interface responsiva e estilizada com Tailwind CSS

🔹 Demonstração Visual
Signup e Login


Criação de conta e login automático.

Listagem de Imóveis


Visualização de todos os imóveis cadastrados.

Criar e Editar Imóveis


Adicionar, editar e deletar imóveis diretamente da interface.

Dica: Gere os GIFs capturando sua tela enquanto interage com o frontend. Salve em frontend/src/assets/ e atualize os links acima.

⚙️ Tecnologias
Backend

Python 3.11+

FastAPI – API REST

SQLAlchemy – ORM

PostgreSQL – Banco de dados

JWT – Autenticação

Passlib – Hash de senhas

Pydantic – Validação de dados

Frontend

React 18 + TypeScript

React Router DOM – Navegação

Axios – Requisições HTTP

Context API + Hooks – Estado global (AuthContext)

Tailwind CSS – Estilização

🗂 Estrutura do Projeto
app/
│
├── core/
│   ├── config.py
│   └── security.py
│
├── api/
│   ├── deps.py
│   ├── v1/
│   │   ├── endpoints/
│   │   │   ├── property_routes.py
│   │   │   └── auth_routes.py
│   │   └── __init__.py
│   └── api.py
│
├── db/
│   ├── session.py
│   ├── models.py
│   └── __init__.py
│
├── schemas/
│   ├── property.py
│   ├── auth.py
│   └── __init__.py
│
├── main.py
└── __init__.py


Frontend:

frontend/
├── src/
│   ├── components/    
│   ├── context/       
│   ├── hooks/         
│   ├── pages/         
│   ├── services/      
│   ├── types/         
│   ├── assets/        # Aqui vão os GIFs e imagens
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
└── package.json

🚀 Setup Rápido
Backend
cd app
python -m venv venv
# Linux / Mac
source venv/bin/activate
# Windows
venv\Scripts\activate
pip install -r requirements.txt


Criar .env:

DATABASE_URL=postgresql://postgres:senha@localhost:5432/imobiliaria_mvp
SECRET_KEY=sua_chave_secreta
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60


Rodar API:

uvicorn app.main:app --reload --port 8000

Frontend
cd frontend
npm install


Criar .env:

VITE_API_URL=http://localhost:8000


Rodar frontend:

npm run dev

🏃‍♂️ Uso Rápido

/signup → Criar conta (já loga automaticamente)

/login → Login de usuários existentes

/imoveis → Listagem de imóveis

/imoveis/novo → Criar imóvel

/imoveis/:propertyId → Editar imóvel

Botão de excluir na listagem

🔹 Alterações recentes

Implementado rota /auth/signup no backend

Criada página Signup.tsx no frontend

Corrigido tipagem de setAuth e catch (err) em TypeScript

Conectado PropertiesList.tsx e PropertyForm.tsx ao backend

Todas requisições usam token do AuthContext

App.tsx atualizado para incluir <AuthProvider>

Este projeto está sob a licença MIT. Veja LICENSE para mais detalhes.
