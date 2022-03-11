# Launch Instructions:

(WARNING: You need a google Maps API key for the maps element to function properly)

## Backend
* run 'pipenv install' inside of the root directory
* Create a .env file inside of the root directory, using the .env.example as a template
* In psql, create a user (with CREATEDB privileges) to match your .env file
* If not already in your pipenv shell, run 'pipenv shell'
* run 'flask db upgrade'
* run 'flask seed all'
* run 'flask run'

## Frontend
* Start by navigating into the 'react-app' directory
* Create a .env file inside of this directory, using the .env.example as a template
* run 'npm install' inside of that directory
* run 'npm start'

## Troubleshooting
* Make sure to start the backend before the frontend, or you will get an error
* If you get an 'econnrefused' when trying to launch the application, run the command 'sudo service postgresql start' to get psql up and running
