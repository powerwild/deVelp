"""empty message

Revision ID: b7fb186ae4fe
Revises:
Create Date: 2022-03-11 11:18:58.474054

"""
from alembic import op
import sqlalchemy as sa

import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")


# revision identifiers, used by Alembic.
revision = 'b7fb186ae4fe'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table('skills',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('developers',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(), nullable=False),
    sa.Column('icon', sa.String(), nullable=False),
    sa.Column('bio', sa.String(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=True),
    sa.Column('city', sa.String(), nullable=False),
    sa.Column('state', sa.String(), nullable=False),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('devskills',
    sa.Column('developerId', sa.Integer(), nullable=False),
    sa.Column('skillId', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['developerId'], ['developers.id'], ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['skillId'], ['skills.id'], ),
    sa.PrimaryKeyConstraint('developerId', 'skillId')
    )
    op.create_table('reviews',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('body', sa.Text(), nullable=False),
    sa.Column('userId', sa.Integer(), nullable=False),
    sa.Column('developerId', sa.Integer(), nullable=False),
    sa.Column('rating', sa.Integer(), nullable=False),
    sa.ForeignKeyConstraint(['developerId'], ['developers.id'], ondelete='CASCADE'),
    sa.ForeignKeyConstraint(['userId'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    if environment == "production":
        op.execute(f"ALTER TABLE <table_name> SET SCHEMA {SCHEMA};")



def downgrade():
    op.drop_table('reviews')
    op.drop_table('devskills')
    op.drop_table('developers')
    op.drop_table('users')
    op.drop_table('skills')
