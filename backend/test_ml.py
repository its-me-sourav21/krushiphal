import asyncio
import httpx

from app.core.config import settings


async def main():
    url = settings.ML_API_URL.rstrip("/") + "/crop-recommendation"

    data = {
        "nitrogen": 90,
        "phosphorus": 42,
        "potassium": 43,
        "temperature": 25.5,
        "humidity": 80,
        "ph": 6.5,
        "rainfall": 200,
    }

    async with httpx.AsyncClient(timeout=30.0) as client:
        response = await client.post(url, json=data)

    print("URL:", url)
    print("STATUS:", response.status_code)
    print("BODY:", response.text)


asyncio.run(main())