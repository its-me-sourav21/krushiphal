from sqlalchemy.orm import Session

from app.models.crop import Crop
from app.repositories.crop import CropRepository
from app.schemas.crop import CropCreate


class CropService:
    def __init__(self, db: Session):
        self.repository = CropRepository(db)

    def create_crop(
        self,
        farmer_id: int,
        crop_data: CropCreate,
    ) -> Crop:
        crop = Crop(
            farmer_id=farmer_id,
            crop_name=crop_data.crop_name,
            area=crop_data.area,
            area_unit=crop_data.area_unit,
            season=crop_data.season,
            sowing_date=crop_data.sowing_date,
        )

        return self.repository.create(crop)

    def get_crop(
        self,
        crop_id: int,
        farmer_id: int,
    ) -> Crop | None:
        return self.repository.get_by_id(
            crop_id=crop_id,
            farmer_id=farmer_id,
        )

    def get_farmer_crops(
        self,
        farmer_id: int,
    ) -> list[Crop]:
        return self.repository.get_by_farmer(
            farmer_id=farmer_id,
        )

    def update_crop(
        self,
        crop: Crop,
        crop_data: CropCreate,
    ) -> Crop:
        crop.crop_name = crop_data.crop_name
        crop.area = crop_data.area
        crop.area_unit = crop_data.area_unit
        crop.season = crop_data.season
        crop.sowing_date = crop_data.sowing_date

        return self.repository.update(crop)

    def delete_crop(self, crop: Crop) -> None:
        self.repository.delete(crop)