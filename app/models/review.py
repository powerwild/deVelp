from flask_sqlalchemy import SQLAlchemy
from .db import db, environment, SCHEMA, add_prefix_for_prod

class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.Text, nullable=False)
    userId = db.Column(db.Integer,  db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    developerId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('developers.id'), ondelete='CASCADE'), nullable=False)
    rating = db.Column(db.Integer, nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "body": self.body,
            "userId": self.userId,
            "developerId": self.developerId,
            "rating": self.rating,
        }
