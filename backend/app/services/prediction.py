import httpx

from app.core.config import settings


class ModelUnavailableError(Exception):
    pass


class PredictionError(Exception):
    pass


class PredictionService:

    def __init__(self):
        self.base_url = settings.ML_API_URL.rstrip("/")

    async def _post(self, endpoint: str, data: dict):
        url = f"{self.base_url}/{endpoint}"

        try:
            async with httpx.AsyncClient(timeout=30.0) as client:
                response = await client.post(
                    url,
                    json=data,
                )

        except httpx.RequestError as exc:
            raise ModelUnavailableError() from exc

        if response.status_code == 422:
            raise PredictionError()

        if response.status_code >= 500:
            raise PredictionError()

        if response.status_code >= 400:
            raise PredictionError()

        try:
            return response.json()
        except ValueError as exc:
            raise PredictionError() from exc

    async def crop_recommendation(self, data: dict):
        return await self._post(
            "crop-recommendation",
            data,
        )

    async def disease_detection(self, data: dict):
        return await self._post(
            "disease-detection",
            data,
        )

    async def price_prediction(self, data: dict):
        return await self._post(
            "price-prediction",
            data,
        )

    async def demand_prediction(self, data: dict):
        return await self._post(
            "demand-prediction",
            data,
        )


prediction_service = PredictionService()