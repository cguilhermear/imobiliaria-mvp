from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from datetime import datetime, timedelta
from jose import jwt

app = FastAPI(title="Imob API")

# Usuário de teste
FAKE_USER = {"email": "user@imob.com", "senha": "1234"}

JWT_SECRET = "teste_super_secreto"
JWT_ALGORITHM = "HS256"
JWT_EXPIRE_MINUTES = 60

class LoginSchema(BaseModel):
    email: str
    senha: str

@app.post("/auth/login")
def login(data: LoginSchema):
    if data.email != FAKE_USER["email"] or data.senha != FAKE_USER["senha"]:
        raise HTTPException(status_code=401, detail="Credenciais inválidas")
    
    payload = {
        "sub": data.email,
        "exp": datetime.utcnow() + timedelta(minutes=JWT_EXPIRE_MINUTES)
    }
    token = jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)
    return {"access_token": token, "token_type": "bearer"}
