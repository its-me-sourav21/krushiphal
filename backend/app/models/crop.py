from datetime import date

from sqlalchemy import Date, Float, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.base import Base


class Crop(Base):
    __tablename__ = "crops"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    farmer_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False,
        index=True,
    )

    crop_name: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    area: Mapped[float] = mapped_column(
        Float,
        nullable=False,
    )

    area_unit: Mapped[str] = mapped_column(
        String(20),
        default="acre",
        nullable=False,
    )

    season: Mapped[str] = mapped_column(
        String(50),
        nullable=False,
    )

    sowing_date: Mapped[date | None] = mapped_column(
        Date,
        nullable=True,
    )

    farmer = relationship(
        "User",
        back_populates="crops",
    )