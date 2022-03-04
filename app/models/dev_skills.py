from .db import db

devskills = db.Table(
    'devskills',
    db.Column('developerId', db.Integer, db.ForeignKey('developers.id'), primary_key=True, nullable=False),
    db.Column('skillId', db.Integer, db.ForeignKey('skills.id'), primary_key=True, nullable=False)
)
