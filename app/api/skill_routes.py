from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Skill
skill_routes = Blueprint('skills', __name__)

@skill_routes.route('/')
@login_required
def all_skills():
    skills = Skill.query.all()
    return {'skills': [skill.to_dict() for skill in skills]}


skills_list = Skill.query.all()
