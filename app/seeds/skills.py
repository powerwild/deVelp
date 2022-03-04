from app.models import db, Skill


def seed_skills():
    skill1 = Skill(
        name='HTML'
    )
    skill2 = Skill(
        name='CSS'
    )
    skill3 = Skill(
        name='Python'
    )
    skill4 = Skill(
        name='Java'
    )
    skill5 = Skill(
        name='JavaScript'
    )
    skill6 = Skill(
        name='Node'
    )
    skill7 = Skill(
        name='NodeJS'
    )
    skill8 = Skill(
        name='Express'
    )
    skill9 = Skill(
        name='Sequelize'
    )
    skill10 = Skill(
        name='Flask'
    )
    skill11 = Skill(
        name='React'
    )
    skill12 = Skill(
        name='Redux'
    )
    skill13 = Skill(
        name='Swift'
    )
    skill14 = Skill(
        name='C++'
    )
    skill15 = Skill(
        name='C#'
    )
    skill16 = Skill(
        name='Ruby'
    )
    skill17 = Skill(
        name='RubyonRails'
    )
    skill18 = Skill(
        name='Golang'
    )

    db.session.add(skill1)
    db.session.add(skill2)
    db.session.add(skill3)
    db.session.add(skill4)
    db.session.add(skill5)
    db.session.add(skill6)
    db.session.add(skill7)
    db.session.add(skill8)
    db.session.add(skill9)
    db.session.add(skill10)
    db.session.add(skill11)
    db.session.add(skill12)
    db.session.add(skill13)
    db.session.add(skill14)
    db.session.add(skill15)
    db.session.add(skill16)
    db.session.add(skill17)
    db.session.add(skill18)

    db.session.commit()


def undo_skills():
    db.session.execute('TRUNCATE skills RESTART IDENTITY CASCADE;')
    db.session.commit()
