# Adopt Animal Backend Server

The backend server consists of **nodejs** + **express** + **mysql**  
To connect to the database, you need to modify the *db.config.js* file

## API

| Methods | Urls     | Actions               |
|---------|----------|-----------------------|
| GET     | /api     | Get all Animal        |
| GET     | /api/:id | Get Animal by *id*    |
| POST    | /api     | Add new Animal        |
| PUT     | /api/:id | Update Animal by *id* |
| DELETE  | /api/:id | Delete Animal by *id* |
| DELETE  | /api     | Delete all Animal     |

## Project setup

```bash
npm install
```

## Run Script

```bash
npm run server
```
