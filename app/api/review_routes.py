from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models.db import db
from app.models import Review
from app.forms import ReviewForm



review_routes = Blueprint('reviews', __name__)

@review_routes.route('/', methods=['GET', 'POST'])
@login_required
def reviews_api():
    form = ReviewForm()
    if not form.data['body']:
        reviews = Review.query.all()
        return {'reviews': [review.to_dict() for review in reviews]}
    if form.validate_on_submit():
        review = Review(
            body=form.data['body'],
            userId=current_user.id,
            developerId=form.data['developerId'],
            rating=form.data['rating']
        )
        db.session.add(review)
        db.session.commit()
        return {"review": review.to_dict()}
    elif form.errors:
        return {"errors": form.errors}


@review_routes.route('/<int:id>', methods=['UPDATE', 'DELETE'])
@login_required
def review_api(id):
    form = ReviewForm()
    review = Review.query.get(id)
    if not form.data['body']:
        db.session.delete(review)
        return {'message': 'Review deleted'}
    if form.validate_on_submit():
        review.body = form.data['body']
        review.rating = form.data['rating']
        db.session.commit()
        return {"review": review.to_dict()}
    elif form.errors:
        return {"errors": form.errors}
