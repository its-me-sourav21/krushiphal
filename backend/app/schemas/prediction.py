from pydantic import BaseModel, Field


# -------------------------
# Crop Recommendation
# -------------------------

class CropRecommendationRequest(BaseModel):
    nitrogen: float
    phosphorus: float
    potassium: float
    temperature: float
    humidity: float = Field(ge=0, le=100)
    ph: float = Field(ge=0, le=14)
    rainfall: float = Field(ge=0)


class CropRecommendationResponse(BaseModel):
    recommended_crop: str
    status: str


# -------------------------
# Disease Detection
# -------------------------
class DiseaseDetectionRequest(BaseModel):
    crop: str = Field(min_length=1)
    symptoms: str = Field(min_length=1)


class DiseaseDetectionResponse(BaseModel):
    status: str
    disease: str
    confidence: float


# -------------------------
# Market Price Prediction
# -------------------------

class PricePredictionRequest(BaseModel):
    crop: str = Field(min_length=1)
    quantity: float = Field(gt=0)
    temperature: float
    rainfall: float = Field(ge=0)
    month: int = Field(ge=1, le=12)


class PricePredictionResponse(BaseModel):
    status: str
    predicted_price: float

# -------------------------
# Demand Prediction
# -------------------------
# -------------------------
# Demand Prediction
# -------------------------

class DemandPredictionRequest(BaseModel):
    crop: str = Field(min_length=1)
    month: int = Field(ge=1, le=12)
    market_price: float = Field(ge=0)
    temperature: float
    rainfall: float = Field(ge=0)
    quantity: float = Field(gt=0)


class DemandPredictionResponse(BaseModel):
    status: str
    predicted_demand: float