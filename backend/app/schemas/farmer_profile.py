from datetime import datetime

from pydantic import BaseModel, ConfigDict


class FarmerProfileCreate(BaseModel):
    phone: str | None = None
    state: str | None = None
    district: str | None = None
    village: str | None = None
    land_area: float | None = None
    land_unit: str = "acre"
    crops: str | None = None


class FarmerProfileUpdate(BaseModel):
    phone: str | None = None
    state: str | None = None
    district: str | None = None
    village: str | None = None
    land_area: float | None = None
    land_unit: str | None = None
    crops: str | None = None


class FarmerProfileResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    user_id: int
    phone: str | None
    state: str | None
    district: str | None
    village: str | None
    land_area: float | None
    land_unit: str
    crops: str | None
    created_at: datetime
    updated_at: datetime