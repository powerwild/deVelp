from .db import db

class Developer(db.Model):
    __tablename__ = 'developers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    icon = db.Column(db.String, nullable=False)
    bio = db.Column(db.String, nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'))
    city = db.Column(db.String, nullable=False)
    state = db.Column(db.String, nullable=False)
