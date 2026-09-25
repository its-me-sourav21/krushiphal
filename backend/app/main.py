from fastapi import FastAPI

from app.api.v1.router import api_router
from app.core.config import settings

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description=settings.DESCRIPTION,
    debug=settings.DEBUG,
)


@app.get("/", tags=["Root"])
def root():
    return {"message": "Welcome to Krushiphal API"}


app.include_router(api_router, prefix=settings.API_V1_PREFIX)