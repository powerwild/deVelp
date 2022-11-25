import os
from flask import Flask, render_template, request, session, redirect
from flask_cors import CORS
from flask_migrate import Migrate
from flask_wtf.csrf import CSRFProtect, generate_csrf
from flask_login import LoginManager
app = Flask(__name__, static_folder='../react-app/build', static_url_path='/')

from app.config import Config
app.config.from_object(Config)

from app.models import db
db.init_app(app)
Migrate(app, db)

from app.models import User

from app.api.auth_routes import auth_routes
from app.api.skill_routes import skill_routes
from app.api.developer_routes import developer_routes
from app.api.review_routes import review_routes

from app.seeds import seed_commands



# Setup login manager
login = LoginManager(app)
login.login_view = 'auth.unauthorized'


@login.user_loader
def load_user(id):
    return User.query.get(int(id))


# Tell flask about our seed commands
app.cli.add_command(seed_commands)

app.register_blueprint(auth_routes, url_prefix='/api/auth')
app.register_blueprint(developer_routes, url_prefix='/api/developers')
app.register_blueprint(review_routes, url_prefix='/api/reviews')
app.register_blueprint(skill_routes, url_prefix='/api/skills')

# Application Security
CORS(app)





# Since we are deploying with Docker and Flask,
# we won't be using a buildpack when we deploy to Heroku.
# Therefore, we need to make sure that in production any
# request made over http is redirected to https.
# Well.........
@app.before_request
def https_redirect():
    if os.environ.get('FLASK_ENV') == 'production':
        if request.headers.get('X-Forwarded-Proto') == 'http':
            url = request.url.replace('http://', 'https://', 1)
            code = 301
            return redirect(url, code=code)


@app.after_request
def inject_csrf_token(response):
    response.set_cookie(
        'csrf_token',
        generate_csrf(),
        secure=True if os.environ.get('FLASK_ENV') == 'production' else False,
        samesite='Strict' if os.environ.get(
            'FLASK_ENV') == 'production' else None,
        httponly=True)
    return response


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def react_root(path):
    if path == 'favicon.ico':
        return app.send_from_directory('public', 'favicon.ico')
    return app.send_static_file('index.html')
