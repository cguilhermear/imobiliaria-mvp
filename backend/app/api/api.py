# app/api/api.py
from fastapi import APIRouter
from app.api.v1.endpoints import property_routes, auth_routes

api_router = APIRouter()
api_router.include_router(auth_routes.router, prefix="/auth", tags=["Autenticação"])
api_router.include_router(property_routes.router, prefix="/imoveis", tags=["Imóveis"])
