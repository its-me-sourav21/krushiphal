from fastapi import FastAPI

app = FastAPI(title="Krushiphal ML API")


@app.get("/")
def root():
    return {
        "status": "ok",
        "service": "Krushiphal ML API"
    }


@app.post("/crop-recommendation")
def crop_recommendation(data: dict):
    return {
        "status": "success",
        "recommended_crop": "rice",
        "message": "Dummy prediction for API integration testing"
    }


@app.post("/disease-detection")
def disease_detection(data: dict):
    return {
        "status": "success",
        "disease": "healthy",
        "confidence": 0.95
    }


@app.post("/price-prediction")
def price_prediction(data: dict):
    return {
        "status": "success",
        "predicted_price": 2500
    }


@app.post("/demand-prediction")
def demand_prediction(data: dict):
    return {
        "status": "success",
        "predicted_demand": 1000
    }
