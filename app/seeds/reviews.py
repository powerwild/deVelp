from app.models import db, Review


# Adds a demo user, you can add other users here if you want
def seed_reviews():
    demo = Review(
        body='Very impressed by this developer...',
        userId=3,
        developerId=4,
        rating=5
        )

    review2 = Review(
        body='They really made my website shine!',
        userId=2,
        developerId=2,
        rating=5
        )

    review3 = Review(
        body='Group 9 for the win',
        userId=3,
        developerId=3,
        rating=5
        )

    review4 = Review(
        body='This developer was just so professional',
        userId=1,
        developerId=5,
        rating=5
        )

    review5 = Review(
        body='This guy is soooo good with PERL',
        userId=2,
        developerId=5,
        rating=5
    )

    review6 = Review(
        body='Good developer!',
        userId=3,
        developerId=5,
        rating=5
    )



    db.session.add(demo)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
