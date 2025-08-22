from datetime import datetime, timedelta
from typing import Optional
from jose import jwt
from passlib.context import CryptContext

# 🔑 Segredo e algoritmo do JWT
SECRET_KEY = "altere_este_segredo"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

# Contexto para criar hash seguro de senhas
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# 🔹 Transformar senha em hash
def get_password_hash(password):
    return pwd_context.hash(password)

# 🔹 Verificar senha digitada contra hash
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

# 🔹 Criar token JWT
def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
