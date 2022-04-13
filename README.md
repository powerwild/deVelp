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

![Screenshot (20)](https://user-images.githubusercontent.com/92146309/163238466-3bb8a80b-6443-42a2-a4b2-b5e83127a27f.png)

## Technologies
* React/Redux
* Python/Flask
* PostgreSQL
* SQLAlchemy
* Google Maps API
* Docker

## Features

### Developers - users can create a developer profile for themselves

![Screenshot (22)](https://user-images.githubusercontent.com/92146309/163239077-e339036c-5b51-49d1-8f5f-fc8ac3e189d9.png)



![Screenshot (23)](https://user-images.githubusercontent.com/92146309/163239097-b6093d39-86e7-4130-97bd-c8c4e3b4a8de.png)

### Reviews - users can leave reviews for developers

![Screenshot (24)](https://user-images.githubusercontent.com/92146309/163239352-22a313ac-808f-44a8-bd52-b6b3efc2b57e.png)

### Search - users can search developers by city, state or skills

![Screenshot (21)](https://user-images.githubusercontent.com/92146309/163239510-e401c797-1cfe-483e-b41c-fdaac36ecf46.png)

### Google Maps - users can view a google map with the developer's location

![Screenshot (24)](https://user-images.githubusercontent.com/92146309/163239666-646ab863-660e-4b53-920d-14a330946d08.png)

