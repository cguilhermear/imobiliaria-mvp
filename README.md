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
│   ├── components/    # Componentes React
│   ├── context/       # Contexto Auth
│   ├── hooks/         # Hooks customizados
│   ├── pages/         # Telas da aplicação (Login, Signup, PropertiesList, PropertyForm)
│   ├── services/      # Serviços Axios
│   ├── types/         # Tipos TypeScript
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
└── package.json

🚀 Setup Rápido
Backend

Criar e ativar ambiente virtual:

cd app
python -m venv venv
# Linux / Mac
source venv/bin/activate
# Windows
venv\Scripts\activate


Instalar dependências:

pip install -r requirements.txt


Criar arquivo .env:

DATABASE_URL=postgresql://postgres:senha@localhost:5432/imobiliaria_mvp
SECRET_KEY=sua_chave_secreta
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60


Rodar a API:

uvicorn app.main:app --reload --port 8000

Frontend

Instalar dependências:

cd frontend
npm install


Criar arquivo .env:

VITE_API_URL=http://localhost:8000


Rodar o frontend:

npm run dev


🔗 Links Úteis:

Backend: http://localhost:8000

Frontend: http://localhost:5173

Swagger API Docs: http://localhost:8000/docs

🏃‍♂️ Uso Rápido

Acesse /signup para criar uma conta (usuário já logado após cadastro).

Acesse /login caso já tenha conta.

Gerencie imóveis:

/imoveis → Listagem de imóveis

/imoveis/novo → Criar imóvel

/imoveis/:propertyId → Editar imóvel

Excluir via botão na lista

🔹 Alterações recentes

Implementado rota /auth/signup no backend

Criada página Signup.tsx no frontend

Corrigido tipagem de setAuth e catch (err) em TypeScript

Conectado PropertiesList.tsx e PropertyForm.tsx ao backend

Todas requisições usam token do AuthContext

App.tsx atualizado para incluir <AuthProvider>
Este projeto está sob a licença MIT. Veja LICENSE para mais detalhes.
