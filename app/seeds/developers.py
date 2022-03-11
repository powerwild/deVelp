from app.models import db, Developer, Skill

# Adds a demo user, you can add other users here if you want
def seed_developers():
    demo = Developer(
        name='demos biz',
        icon='fa-solid fa-person-biking',
        bio='I am literally the BEST!!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        userId=1,
        city='San Francisco',
        state='California'
        )
    skill1 = Skill.query.get(1)
    demo.skills.append(
      skill1
    )
    bryan = Developer(
        name='bryan',
        icon='fa-solid fa-user-secret',
        bio='I love pug. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        userId=4,
        city='Charleston',
        state='West Virginia'
        )
    skill2 = Skill.query.get(2)
    bryan.skills.append(
      skill1
    )
    bryan.skills.append(
      skill2
    )

    casey = Developer(
        name='casey',
        icon='fa-solid fa-user-ninja',
        bio='Redux is my favorite. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        userId=5,
        city='Parker',
        state='Colorado'
        )
    skill3 = Skill.query.get(3)
    casey.skills.append(
      skill3
    )
    charles = Developer(
        name='charles',
        icon='fa-solid fa-user-astronaut',
        bio='Bootstrap is where its at! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        userId=6,
        city='Taylor',
        state='Texas'
        )
    skill4 = Skill.query.get(4)
    charles.skills.append(
      skill4
    )
    jake = Developer(
        name='jake',
        icon='fa-solid fa-skull',
        bio='I like recursion... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        userId=7,
        city='Springville',
        state='Utah'
        )
    skill5 = Skill.query.get(5)
    jake.skills.append(
      skill5
    )
    db.session.add(demo)
    db.session.add(bryan)
    db.session.add(casey)
    db.session.add(charles)
    db.session.add(jake)
    db.session.commit()
# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_developers():
    db.session.execute('TRUNCATE developers RESTART IDENTITY CASCADE;')
    db.session.commit()
