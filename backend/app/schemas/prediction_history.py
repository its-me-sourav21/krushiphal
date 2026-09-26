from datetime import datetime

from pydantic import BaseModel, ConfigDict


class PredictionHistoryResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    prediction_type: str
    result: str
    created_at: datetime