from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.farmer_profile import FarmerProfile


class FarmerProfileRepository:
    def __init__(self, db: Session):
        self.db = db

    def create(self, profile: FarmerProfile) -> FarmerProfile:
        self.db.add(profile)
        self.db.commit()
        self.db.refresh(profile)
        return profile

    def get_by_user_id(self, user_id: int) -> FarmerProfile | None:
        statement = select(FarmerProfile).where(
            FarmerProfile.user_id == user_id
        )
        return self.db.scalar(statement)

    def update(self, profile: FarmerProfile) -> FarmerProfile:
        self.db.commit()
        self.db.refresh(profile)
        return profile

    def delete(self, profile: FarmerProfile) -> None:
        self.db.delete(profile)
        self.db.commit()