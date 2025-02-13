
# Library Management System

A simple CRUD application for managing a collection of books stored in a PostgreSQL database.


## Authors

- [@MazenWael2004](https://www.github.com/MazenWael2004)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_USER`

`DB_PASSWORD`

`DB_HOST`

`DB_NAME`

`DB_PORT`


## Run Locally

Clone the project

```bash
  git clone https://github.com/MazenWael2004/Backend-Library-Management-System
```

Go to the project directory

```bash
  cd my-project
```
Initialize node_modules
```bash
  npm init -y
```
Make sure the type in package.json is module
```bash
  "type": "module"
```

Install dependencies

```bash
  npm i express pg body-parser dotenv
```

Start the server

```bash
  nodemon index.js
```

