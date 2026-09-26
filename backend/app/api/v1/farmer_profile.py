from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.security import require_role
from app.database.session import get_db
from app.models.user import User
from app.schemas.farmer_profile import (
    FarmerProfileCreate,
    FarmerProfileResponse,
    FarmerProfileUpdate,
)
from app.services.farmer_profile import FarmerProfileService


router = APIRouter(
    prefix="/farmers",
    tags=["Farmer Profile"],
)


@router.post(
    "/profile",
    response_model=FarmerProfileResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_farmer_profile(
    profile_data: FarmerProfileCreate,
    current_user: User = Depends(require_role("farmer")),
    db: Session = Depends(get_db),
):
    service = FarmerProfileService(db)

    try:
        return service.create_profile(
            user_id=current_user.id,
            profile_data=profile_data,
        )

    except ValueError as exc:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=str(exc),
        )


@router.get(
    "/profile",
    response_model=FarmerProfileResponse,
)
def get_farmer_profile(
    current_user: User = Depends(require_role("farmer")),
    db: Session = Depends(get_db),
):
    service = FarmerProfileService(db)

    profile = service.get_profile(current_user.id)

    if profile is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Farmer profile not found",
        )

    return profile


@router.put(
    "/profile",
    response_model=FarmerProfileResponse,
)
def update_farmer_profile(
    profile_data: FarmerProfileUpdate,
    current_user: User = Depends(require_role("farmer")),
    db: Session = Depends(get_db),
):
    service = FarmerProfileService(db)

    try:
        return service.update_profile(
            user_id=current_user.id,
            profile_data=profile_data,
        )

    except ValueError as exc:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=str(exc),
        )