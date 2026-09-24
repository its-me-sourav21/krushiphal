from fastapi import FastAPI

app = FastAPI(
    title="Krushiphal (AgriLink) API",
    version="0.1.0",
    description="Backend API for Krushiphal / AgriLink",
)


@app.get("/", tags=["Root"])
def root():
    return {"message": "Welcome to Krushiphal API"}


@app.get("/health", tags=["Health"])
def health_check():
    return {"status": "ok", "service": "krushiphal-backend"}