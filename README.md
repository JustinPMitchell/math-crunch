# Summary
 A full-stack MERN app, originally adapted from [Jenna Badanowski](https://github.com/jbadan/meanImageEditor)!

# Technologies Used
* Mongodb
* Express
* React
* Node.js

# Backend Routes
METHOD | URL | Purpose
--- | --- | ---
POST | /auth/signup | Adds new user to user database
POST | /auth/login | Authenticates login details
POST | /auth/me/from/token | Checks if token is present on browser refresh

# Instructions to Install
* npm init in main folder
* npm install in main folder
* add .env file with JWT_SECRET
* npm init in client folder
* npm install in client folder
* npm run build in client folder
* npm run start in client folder or main folder