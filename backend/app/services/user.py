from pwdlib import PasswordHash
from sqlalchemy.orm import Session

from app.core.security import create_access_token
from app.models.user import User
from app.repositories.user import UserRepository
from app.schemas.user import UserCreate


password_hash = PasswordHash.recommended()


class UserService:
    def __init__(self, db: Session):
        self.repository = UserRepository(db)

    def create_user(self, user_data: UserCreate) -> User:
        existing_user = self.repository.get_by_email(user_data.email)

        if existing_user:
            raise ValueError("User with this email already exists")

        hashed_password = password_hash.hash(user_data.password)

        user = User(
            name=user_data.name,
            email=user_data.email,
            password_hash=hashed_password,
            role=user_data.role,
        )

        return self.repository.create(user)

    def login_user(self, email: str, password: str) -> str:
        user = self.repository.get_by_email(email)

        if not user:
            raise ValueError("Invalid email or password")

        if not password_hash.verify(password, user.password_hash):
            raise ValueError("Invalid email or password")

        if not user.is_active:
            raise ValueError("User account is inactive")

        return create_access_token({"sub": str(user.id)})