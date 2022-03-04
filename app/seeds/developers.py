from app.models import db, Developer


# Adds a demo user, you can add other users here if you want
def seed_developers():
    demo = Developer(
        name='demos biz',
        icon='blah blah blah...',
        bio='I am literally the BEST!!!',
        userId=1,
        city='Honolulu',
        state='Hawaii'
        )

    db.session.add(demo)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_developers():
    db.session.execute('TRUNCATE developers RESTART IDENTITY CASCADE;')
    db.session.commit()
