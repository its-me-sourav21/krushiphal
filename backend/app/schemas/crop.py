from datetime import date

from pydantic import BaseModel, ConfigDict, Field


class CropCreate(BaseModel):
    crop_name: str = Field(min_length=2, max_length=100)
    area: float = Field(gt=0)
    area_unit: str = "acre"
    season: str = Field(min_length=2, max_length=50)
    sowing_date: date | None = None


class CropResponse(BaseModel):
    id: int
    farmer_id: int
    crop_name: str
    area: float
    area_unit: str
    season: str
    sowing_date: date | None

    model_config = ConfigDict(from_attributes=True)
    