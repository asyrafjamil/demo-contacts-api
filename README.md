# Demo Contacts API
Using NodeJS and ExpressJS for API. 

## Features
1. Register User
2. Add a contact to particular user
3. Free text search on number, email or name of the person to whom this contact belongs to

## Requirements
1. Get MongoDB and connect to the database.
2. Install all the packages by entering command "npm install".
3. Start the service using nodemon.
4. You're good to go!

## Edit these variables using your own value
1. Configure your database url and name

## Testing
Use <a href="https://www.getpostman.com" target="_blank">Postman</a> to test.<br/>
Postman Environment is provided at the repository. 

**Register** <br/>
Create a POST request to /people <br/>
![Register](https://github.com/asyrafjamil/NodeJS-Authentication-App-JWT/blob/master/Register%20User.png "Register")

**Add a Contact To Particular User** <br/>
Create a POST request to /people/:id/contacts to add a contact to particular user.
![Recover](https://github.com/asyrafjamil/NodeJS-Authentication-App-JWT/blob/master/Reset%20Password.png "Reset")

**Searching User Using Free Text Search** <br/>
Create a GET request to /contacts?q=:query to search user.
![Recover](https://github.com/asyrafjamil/NodeJS-Authentication-App-JWT/blob/master/Reset%20Password.png "Reset")


