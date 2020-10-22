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

## Register <br/>
Create a POST request to /people <br/>
![Register](https://github.com/asyrafjamil/demo-contacts-api/blob/main/Screenshot%20(68).png "Register")

## Add a Contact To Particular User <br/>
Create a POST request to /people/:id/contacts to add a contact to particular user.
![Contact](https://github.com/asyrafjamil/demo-contacts-api/blob/main/Screenshot%20(69).png "Contact")

## Searching User Using Free Text Search <br/>
Create a GET request to /contacts?q=:query to search user.

***Search Using Name***
![Name](https://github.com/asyrafjamil/demo-contacts-api/blob/main/Screenshot%20(73).png "Name")

***Search Using Email***
![Email](https://github.com/asyrafjamil/demo-contacts-api/blob/main/Screenshot%20(74).png "Email")

***Search Using Number***
![Number](https://github.com/asyrafjamil/demo-contacts-api/blob/main/Screenshot%20(75).png "Number")





