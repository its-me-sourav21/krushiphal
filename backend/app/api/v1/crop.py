from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.security import require_role
from app.database.session import get_db
from app.models.user import User
from app.schemas.crop import CropCreate, CropResponse
from app.services.crop import CropService


router = APIRouter(
    prefix="/crops",
    tags=["Crops"],
)


@router.post(
    "/",
    response_model=CropResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_crop(
    crop_data: CropCreate,
    current_user: User = Depends(require_role("farmer")),
    db: Session = Depends(get_db),
):
    service = CropService(db)

    return service.create_crop(
        farmer_id=current_user.id,
        crop_data=crop_data,
    )


@router.get(
    "/",
    response_model=list[CropResponse],
)
def get_my_crops(
    current_user: User = Depends(require_role("farmer")),
    db: Session = Depends(get_db),
):
    service = CropService(db)

    return service.get_farmer_crops(
        farmer_id=current_user.id,
    )


@router.get(
    "/{crop_id}",
    response_model=CropResponse,
)
def get_crop(
    crop_id: int,
    current_user: User = Depends(require_role("farmer")),
    db: Session = Depends(get_db),
):
    service = CropService(db)

    crop = service.get_crop(
        crop_id=crop_id,
        farmer_id=current_user.id,
    )

    if crop is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Crop not found",
        )

    return crop


@router.put(
    "/{crop_id}",
    response_model=CropResponse,
)
def update_crop(
    crop_id: int,
    crop_data: CropCreate,
    current_user: User = Depends(require_role("farmer")),
    db: Session = Depends(get_db),
):
    service = CropService(db)

    crop = service.get_crop(
        crop_id=crop_id,
        farmer_id=current_user.id,
    )

    if crop is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Crop not found",
        )

    return service.update_crop(
        crop=crop,
        crop_data=crop_data,
    )


@router.delete(
    "/{crop_id}",
    status_code=status.HTTP_204_NO_CONTENT,
)
def delete_crop(
    crop_id: int,
    current_user: User = Depends(require_role("farmer")),
    db: Session = Depends(get_db),
):
    service = CropService(db)

    crop = service.get_crop(
        crop_id=crop_id,
        farmer_id=current_user.id,
    )

    if crop is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Crop not found",
        )

    service.delete_crop(crop)

    return None