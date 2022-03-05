from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField, SelectField
from wtforms.validators import DataRequired


class ReviewForm(FlaskForm):
    body = TextAreaField('Write your Review', validators=[DataRequired()])
    rating = SelectField('Rating', validators=[DataRequired()], choices=[1,2,3,4,5])
    submit = SubmitField('Submit')