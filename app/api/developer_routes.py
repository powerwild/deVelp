from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Developer


developer_routes = Blueprint('developers', __name__)

@developer_routes.route('/', methods=['GET', 'POST'])
@login_required
def developers_api():
    developers = Developer.query.all()
    return {'developers': [dev.to_dict() for dev in developers]}


@developer_routes.route('/<int:id>', methods=['UPDATE', 'DELETE'])
def developer_api(id):
    developer = Developer.query.get(id)
    return developer.to_dict()
