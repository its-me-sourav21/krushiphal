from fastapi import APIRouter

from app.api.v1 import (
    auth,
    crop,
    farmer_profile,
    health,
    user,
    prediction,
)


api_router = APIRouter()

api_router.include_router(health.router)
api_router.include_router(user.router)
api_router.include_router(farmer_profile.router)
api_router.include_router(auth.router)
api_router.include_router(crop.router)
api_router.include_router(prediction.router)