from .db import db, environment, SCHEMA, add_prefix_for_prod

devskills = db.Table(
    'devskills',
    db.Column('developerId', db.Integer, db.ForeignKey(add_prefix_for_prod('developers.id'), ondelete='CASCADE'), primary_key=True, nullable=False),
    db.Column('skillId', db.Integer, db.ForeignKey(add_prefix_for_prod('skills.id')), primary_key=True, nullable=False)
)
if environment == 'production':
    devskills.schema = SCHEMA
