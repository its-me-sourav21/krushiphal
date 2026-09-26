from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "Krushiphal (AgriLink) API"
    VERSION: str = "0.1.0"
    DESCRIPTION: str = "Backend API for Krushiphal / AgriLink"
    API_V1_PREFIX: str = "/api/v1"
    ENVIRONMENT: str = "development"
    DEBUG: bool = True

    DATABASE_URL: str = "sqlite:///./krushiphal.db"

    SECRET_KEY: str = "change-this-development-secret-key"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    # ML Prediction API
    ML_API_URL: str = "http://127.0.0.1:8001"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )


settings = Settings()