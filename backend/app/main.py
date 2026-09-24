from fastapi import FastAPI

from app.api.v1.router import api_router

app = FastAPI(
    title="Krushiphal (AgriLink) API",
    version="0.1.0",
    description="Backend API for Krushiphal / AgriLink",
)


@app.get("/", tags=["Root"])
def root():
    return {"message": "Welcome to Krushiphal API"}


app.include_router(api_router, prefix="/api/v1")