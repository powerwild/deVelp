from flask.cli import AppGroup

from .users import seed_users, undo_users
from .developers import seed_developers, undo_developers
from .skills import seed_skills, undo_skills
from .reviews import seed_reviews, undo_reviews

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_skills()
    seed_developers()
    seed_reviews()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_skills()
    undo_developers()
    undo_reviews()
    # Add other undo functions here
