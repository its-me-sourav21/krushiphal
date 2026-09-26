from sqlalchemy.orm import Session

from app.models.farmer_profile import FarmerProfile
from app.repositories.farmer_profile import FarmerProfileRepository
from app.schemas.farmer_profile import (
    FarmerProfileCreate,
    FarmerProfileUpdate,
)


class FarmerProfileService:
    def __init__(self, db: Session):
        self.repository = FarmerProfileRepository(db)

    def create_profile(
        self,
        user_id: int,
        profile_data: FarmerProfileCreate,
    ) -> FarmerProfile:

        existing_profile = self.repository.get_by_user_id(user_id)

        if existing_profile:
            raise ValueError("Farmer profile already exists")

        profile = FarmerProfile(
            user_id=user_id,
            phone=profile_data.phone,
            state=profile_data.state,
            district=profile_data.district,
            village=profile_data.village,
            land_area=profile_data.land_area,
            land_unit=profile_data.land_unit,
            crops=profile_data.crops,
        )

        return self.repository.create(profile)

    def get_profile(
        self,
        user_id: int,
    ) -> FarmerProfile | None:

        return self.repository.get_by_user_id(user_id)

    def update_profile(
        self,
        user_id: int,
        profile_data: FarmerProfileUpdate,
    ) -> FarmerProfile:

        profile = self.repository.get_by_user_id(user_id)

        if profile is None:
            raise ValueError("Farmer profile not found")

        update_data = profile_data.model_dump(exclude_unset=True)

        for field, value in update_data.items():
            setattr(profile, field, value)

        return self.repository.update(profile)