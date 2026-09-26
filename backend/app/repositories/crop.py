from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.crop import Crop


class CropRepository:
    def __init__(self, db: Session):
        self.db = db

    def create(self, crop: Crop) -> Crop:
        self.db.add(crop)
        self.db.commit()
        self.db.refresh(crop)
        return crop

    def get_by_id(self, crop_id: int, farmer_id: int) -> Crop | None:
        statement = select(Crop).where(
            Crop.id == crop_id,
            Crop.farmer_id == farmer_id,
        )
        return self.db.scalar(statement)

    def get_by_farmer(self, farmer_id: int) -> list[Crop]:
        statement = (
            select(Crop)
            .where(Crop.farmer_id == farmer_id)
            .order_by(Crop.id.desc())
        )

        return list(self.db.scalars(statement).all())

    def update(self, crop: Crop) -> Crop:
        self.db.commit()
        self.db.refresh(crop)
        return crop

    def delete(self, crop: Crop) -> None:
        self.db.delete(crop)
        self.db.commit()
        