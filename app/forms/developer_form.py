from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField, SelectMultipleField
from wtforms.validators import DataRequired, ValidationError
from flask_login import current_user
from app.models import Developer




# def developername_exists(form, field):
#     # Checking if user already has dev profile
#     dev = Developer.query.filter(Developer.userId == current_user.id).first()
#     if dev:
#         raise ValidationError('You already have a developer profile.')


class DeveloperForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    icon = StringField('Icon', validators=[DataRequired()])
    bio = TextAreaField('About Me', validators=[DataRequired()])
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    skills = SelectMultipleField('Skills', choices=['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'], validators=[DataRequired()])
    submit = SubmitField('Submit')
