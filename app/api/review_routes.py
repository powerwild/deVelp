from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models.db import db
from app.models import Review
from app.forms import ReviewForm
from app.models import User


review_routes = Blueprint('reviews', __name__)

@review_routes.route('/<int:id>', methods=['GET'])
@login_required
def dev_reviews(id):
    reviews = Review.query.filter(Review.developerId == id).join(User, User.id == Review.userId).add_columns(Review.id, Review.body, Review.rating, Review.developerId, Review.userId, User.username).all()
    print(reviews)
    return {"reviews": [{"id": review.id, "body": review.body, "rating": review.rating, "developerId": review.developerId,"username": review.username, "userId": review.userId} for review in reviews]}

@review_routes.route('/', methods=['POST'])
@login_required
def reviews_api():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
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



@review_routes.route('/<int:id>', methods=['PUT', 'DELETE'])
@login_required
def review_api(id):
    form = ReviewForm()
    review = Review.query.get(id)
    if not form.data['body']:
        db.session.delete(review)
        db.session.commit()
        return {'message': 'Review deleted'}
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review.body = form.data['body']
        review.rating = form.data['rating']
        db.session.commit()
        return {"review": review.to_dict()}
    elif form.errors:
        return {"errors": form.errors}
