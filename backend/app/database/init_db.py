from app.database.base import Base
from app.database.session import engine

from app.models.user import User
from app.models.farmer_profile import FarmerProfile
from app.models.crop import Crop
from app.models.prediction_history import PredictionHistory


def init_db() -> None:
    Base.metadata.create_all(bind=engine)