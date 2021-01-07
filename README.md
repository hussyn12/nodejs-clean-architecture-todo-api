# Basic todo Api following Domain driven + Clean Architecture Principles
An implementation of Clean Code Architecture and Domain Driven Design with Express-Node. With this open source boiler plate template one can follow best practices of Loosely-coupled and Inverted-Dependency Architecture in Express-Node.
## Features:
-	CRUD operations for task and user
-	User authentication with JWT token
-	User authentication with google and Oauth
## Getting Started
### Prerequisites
-	Nodejs, Npm (https://www.npmjs.com/get-npm)
-	MongoDb server, local or remote. Example: mLab (https://mlab.com/)
-	Mysql server, local or remote.
### Installing
-	Clone the repo and check out the code
-	Run
```
$ cd nodejs-clean-architecture-todo-api
$ npm install
$ npm start
```
-	Set following environmental variables in a .env file in the root directory
```
#Mongodb server connection URI
MongoUri = 'mongodb://<user_name>:<password>@xxxxx.mlab.com:xxxxx/<db_name>'

#Mysql server detal
MYSQL_HOST = <host>
MYSQL_PORT = <port
MYSQL_USER = <user_name
MYSQL_PASSWORD = <password>
MYSQL_DB = <db_name>

#JWT Secret key
ACCESS_TOKEN_SECRET = <some_string>

#Google app credentials
CLIENT_ID = <your google client id>
CLIENT_SECRET = <secret key>
REDIRECT_URL = <your redirect URL>
```

## Available Routes

### User Authentication
-	Login User with Email
```
 Method: post
 Type: public
 Route: api/auth/login
```
-	Login with Google
```
 Method: post
 Type: public
 Route: api/auth/google
```
### User Information
-	Register User with Email
```
 Method: post
 Type: public
 Route: api/user/create
```
-	List of All Users
```
Method: get
Type: private
Route: api/user/list
```
-	Delete User
```
 Method: delete
 Type: private
 Route: api/user/:id
```
-	Update User
```
 Method: put
 Type: private
 Route: api/user/:id
```
### Tasks
-	Create new Task
```
 Method: post
 Type: private
 Route: api/todo/create
```
-	List of All the Task
```
Method: get
Type: private
Route: api/todo/list
```
-	Delete Task
```
 Method: delete
 Type: private
 Route: api/todo/delete/:id
```
-	Update Task
```
 Method: put
 Type: private
 Route: api/todo/:id
```
## Running Tests
For unit testing we are using Jest (https://www.npmjs.com/package/jest) and for endpoint testing used supertest (https://www.npmjs.com/package/supertest). For testing run
```
$ npm test
```
## Contributing
Please create an issue and start working a feature/ bug you prefer 🚀.
## License
This project is licensed under ISC.
