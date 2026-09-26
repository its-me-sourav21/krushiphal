from sqlalchemy import select
from sqlalchemy.orm import Session

from app.models.prediction_history import PredictionHistory


class PredictionHistoryRepository:
    def __init__(self, db: Session):
        self.db = db

    def create(
        self,
        history: PredictionHistory,
    ) -> PredictionHistory:
        self.db.add(history)
        self.db.commit()
        self.db.refresh(history)
        return history

    def get_by_user_id(
        self,
        user_id: int,
    ) -> list[PredictionHistory]:
        statement = (
            select(PredictionHistory)
            .where(PredictionHistory.user_id == user_id)
            .order_by(PredictionHistory.created_at.desc())
        )

        return list(self.db.scalars(statement).all())