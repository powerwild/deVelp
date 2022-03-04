from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired

class DeveloperForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    bio = TextAreaField('About Me', validators=[DataRequired()])
    city = StringField('City', validators=[DataRequired()])
    state = StringField('State', validators=[DataRequired()])
    submit = SubmitField('Submit')