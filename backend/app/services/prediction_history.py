from sqlalchemy.orm import Session

from app.models.prediction_history import PredictionHistory
from app.repositories.prediction_history import PredictionHistoryRepository


class PredictionHistoryService:
    def __init__(self, db: Session):
        self.repository = PredictionHistoryRepository(db)

    def create_history(
        self,
        user_id: int,
        prediction_type: str,
        result: str,
    ) -> PredictionHistory:
        history = PredictionHistory(
            user_id=user_id,
            prediction_type=prediction_type,
            result=result,
        )

        return self.repository.create(history)

    def get_history(
        self,
        user_id: int,
    ) -> list[PredictionHistory]:
        return self.repository.get_by_user_id(user_id)