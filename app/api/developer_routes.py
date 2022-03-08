from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Developer, db
from app.forms import DeveloperForm



developer_routes = Blueprint('developers', __name__)

@developer_routes.route('/', methods=['GET', 'POST'])
@login_required
def developers_api():

    form = DeveloperForm()
    # print("FORM!!!!", form)

    # if not form.data:
    #     developers = Developer.query.all()
    #     return {'developers': [dev.to_dict() for dev in developers]}
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
            dev = Developer(
                name=form.data['name'],
                icon=form.data['icon'],
                userId=current_user.id,
                bio=form.data['bio'],
                city=form.data['city'],
                state=form.data['state']
            )

            db.session.add(dev)
            db.session.commit()
            print('==============', dev.to_dict())
            return dev.to_dict()
    if form.errors:
        return form.errors

    developers = Developer.query.all()
    return {'developers': [dev.to_dict() for dev in developers]}

@developer_routes.route('/<int:id>', methods=['GET'])
@login_required
def one_dev(id):
    developer = Developer.query.get(id)
    return developer.to_dict()


@developer_routes.route('/<int:id>', methods=['PUT', 'DELETE'])
def developer_api(id):
    developer = Developer.query.get(id)
    return developer.to_dict()
