# 🏠 Imobiliária MVP

[![Python](https://img.shields.io/badge/Python-3.11-blue)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.95-green)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue)](https://www.postgresql.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

---

## 📖 Descrição
O **Imobiliária MVP** é um projeto **fullstack** para gerenciamento de imóveis, com autenticação **JWT**, CRUD completo e integração entre **React + TypeScript** (frontend) e **FastAPI + SQLAlchemy + PostgreSQL** (backend).

Funcionalidades principais:
- Cadastro e login de usuários
- CRUD de imóveis (criar, listar, editar, deletar)
- Persistência de token via `localStorage`
- Rotas protegidas com `ProtectedRoute`
- Interface responsiva e estilizada com **Tailwind CSS**

---

## ⚙️ Tecnologias

### Backend
- **Python 3.11+**
- **FastAPI** – API REST
- **SQLAlchemy** – ORM
- **PostgreSQL** – Banco de dados
- **JWT** – Autenticação
- **Passlib** – Hash de senhas
- **Pydantic** – Validação de dados

### Frontend
- **React 18 + TypeScript**
- **React Router DOM** – Navegação
- **Axios** – Requisições HTTP
- **Context API + Hooks** – Estado global
- **Tailwind CSS** – Estilização

---

## 🗂 Estrutura do Projeto

imobiliaria-mvp/
│
├── backend/
│ ├── app/
│ │ ├── core/ # Configuração e segurança
│ │ ├── api/ # Rotas e endpoints
│ │ ├── db/ # Modelos e sessão do SQLAlchemy
│ │ ├── schemas/ # Schemas Pydantic
│ │ └── main.py
│ └── requirements.txt
│
├── frontend/
│ ├── src/
│ │ ├── components/ # Componentes React
│ │ ├── context/ # Contexto Auth
│ │ ├── hooks/ # Hooks customizados
│ │ ├── pages/ # Telas da aplicação
│ │ ├── services/ # Serviços Axios
│ │ ├── types/ # Tipos TypeScript
│ │ ├── App.tsx
│ │ ├── main.tsx
│ │ └── index.css
│ └── package.json
└── README.md

yaml
Copiar código

---

## 🚀 Setup Rápido

### Backend
1. Criar e ativar ambiente virtual:
```bash
cd backend
python -m venv venv
# Linux / Mac
source venv/bin/activate
# Windows
venv\Scripts\activate
Instalar dependências:

bash
Copiar código
pip install -r requirements.txt
Criar arquivo .env:

env
Copiar código
DATABASE_URL=postgresql://postgres:senha@localhost:5432/imobiliaria_mvp
SECRET_KEY=sua_chave_secreta
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
Rodar a API:

bash
Copiar código
uvicorn app.main:app --reload --port 8000
Frontend
Instalar dependências:

bash
Copiar código
cd frontend
npm install
Criar arquivo .env:

env
Copiar código
VITE_API_URL=http://localhost:8000
Rodar o frontend:

bash
Copiar código
npm run dev
🔗 Links Úteis
Backend: http://localhost:8000

Frontend: http://localhost:5173 (Vite Dev Server)

Swagger API Docs: http://localhost:8000/docs

🏃‍♂️ Uso Rápido
Acesse /login e faça login com seu usuário.

Navegue até /properties para ver a lista de imóveis.

Crie, edite ou delete imóveis diretamente pela interface.

O token JWT será salvo automaticamente no localStorage e usado para proteger rotas.

📝 Licença
Este projeto está sob a licença MIT. Veja LICENSE para mais detalhes.
