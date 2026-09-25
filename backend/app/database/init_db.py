from app.database.base import Base
from app.database.session import engine

# Import models so SQLAlchemy knows about all tables.
from app.models.user import User


def init_db() -> None:
    Base.metadata.create_all(bind=engine)