from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
import json

from app.core.security import require_role
from app.database.session import get_db
from app.models.user import User

from app.schemas.prediction import (
    CropRecommendationRequest,
    CropRecommendationResponse,
    DiseaseDetectionRequest,
    DiseaseDetectionResponse,
    PricePredictionRequest,
    PricePredictionResponse,
    DemandPredictionRequest,
    DemandPredictionResponse,
)

from app.schemas.prediction_history import PredictionHistoryResponse

from app.services.prediction import (
    prediction_service,
    ModelUnavailableError,
    PredictionError,
)

from app.services.prediction_history import PredictionHistoryService


router = APIRouter(
    prefix="/predictions",
    tags=["Predictions"],
)


def handle_prediction_error(exc: Exception):
    if isinstance(exc, ModelUnavailableError):
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail={
                "status": "error",
                "error_code": "MODEL_UNAVAILABLE",
                "message": "Prediction model is currently unavailable",
            },
        )

    if isinstance(exc, PredictionError):
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail={
                "status": "error",
                "error_code": "PREDICTION_ERROR",
                "message": "Unable to generate prediction",
            },
        )

    raise HTTPException(
        status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
        detail={
            "status": "error",
            "error_code": "PREDICTION_ERROR",
            "message": "Unable to generate prediction",
        },
    )


def save_prediction_history(
    db: Session,
    user_id: int,
    prediction_type: str,
    result,
):
    history_service = PredictionHistoryService(db)

    history_service.create_history(
        user_id=user_id,
        prediction_type=prediction_type,
        result=json.dumps(result),
    )


# =========================================================
# CROP RECOMMENDATION
# =========================================================

@router.post(
    "/crop-recommendation",
    response_model=CropRecommendationResponse,
)
async def crop_recommendation(
    request: CropRecommendationRequest,
    current_user: User = Depends(require_role("farmer")),
    db: Session = Depends(get_db),
):
    try:
        result = await prediction_service.crop_recommendation(
            request.model_dump()
        )

        save_prediction_history(
            db=db,
            user_id=current_user.id,
            prediction_type="crop_recommendation",
            result=result,
        )

        return result

    except Exception as exc:
        handle_prediction_error(exc)


# =========================================================
# DISEASE DETECTION
# =========================================================

@router.post(
    "/disease-detection",
    response_model=DiseaseDetectionResponse,
)
async def disease_detection(
    request: DiseaseDetectionRequest,
    current_user: User = Depends(require_role("farmer")),
    db: Session = Depends(get_db),
):
    try:
        result = await prediction_service.disease_detection(
            request.model_dump()
        )

        print("DEBUG ML RESULT:", result)

        save_prediction_history(
            db=db,
            user_id=current_user.id,
            prediction_type="disease_detection",
            result=result,
        )

        print("DEBUG HISTORY SAVED")

        return result

    except Exception as exc:
        print("DEBUG DISEASE ERROR:", repr(exc))
        raise


# =========================================================
# PRICE PREDICTION
# =========================================================

@router.post(
    "/price-prediction",
    response_model=PricePredictionResponse,
)
async def price_prediction(
    request: PricePredictionRequest,
    current_user: User = Depends(require_role("farmer")),
    db: Session = Depends(get_db),
):
    try:
        result = await prediction_service.price_prediction(
            request.model_dump()
        )

        save_prediction_history(
            db=db,
            user_id=current_user.id,
            prediction_type="price_prediction",
            result=result,
        )

        return result

    except Exception as exc:
        handle_prediction_error(exc)


# =========================================================
# DEMAND PREDICTION
# =========================================================

@router.post(
    "/demand-prediction",
    response_model=DemandPredictionResponse,
)
async def demand_prediction(
    request: DemandPredictionRequest,
    current_user: User = Depends(require_role("farmer")),
    db: Session = Depends(get_db),
):
    try:
        result = await prediction_service.demand_prediction(
            request.model_dump()
        )

        save_prediction_history(
            db=db,
            user_id=current_user.id,
            prediction_type="demand_prediction",
            result=result,
        )

        return result

    except Exception as exc:
        handle_prediction_error(exc)


# =========================================================
# PREDICTION HISTORY
# =========================================================

@router.get(
    "/history",
    response_model=list[PredictionHistoryResponse],
)
def get_prediction_history(
    current_user: User = Depends(require_role("farmer")),
    db: Session = Depends(get_db),
):
    service = PredictionHistoryService(db)

    return service.get_history(
        user_id=current_user.id,
    )