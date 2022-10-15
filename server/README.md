# Adopt Animal Backend Server

The backend server consists of **nodejs** + **express** + **mysql**  
To connect to the database, you need to modify the *db.config.js* file

## Project setup

```bash
npm install
```

## Run Script

```bash
npm run server
```

## API

### Animal Api

| Methods | Urls            | Actions               |
|---------|-----------------|-----------------------|
| GET     | /api/animal     | Get all Animal        |
| GET     | /api/animal/:id | Get Animal by *id*    |
| POST    | /api/animal     | Add new Animal        |
| PUT     | /api/animal/:id | Update Animal by *id* |
| DELETE  | /api/animal/:id | Delete Animal by *id* |
| DELETE  | /api/animal     | Delete all Animal     |

### Image Api

| Methods | Urls         | Actions              |
|---------|--------------|----------------------|
| GET     | /api/img     | Get all Images       |
| GET     | /api/img/:id | Get Image by *id*    |
| POST    | /api/img     | Add new Image        |
| PUT     | /api/img/:id | Update Image by *id* |
| DELETE  | /api/img/:id | Delete Image by *id* |
| DELETE  | /api/img     | Delete all Images    |

## Database

### Tabel: animal

| Name        | Tpye    | Key |
|-------------|---------|-----|
| id          | int     | PRI |
| name        | varchar |     |
| type        | varchar |     |
| age         | int     |     |
| sex         | varchar |     |
| weight      | double  |     |
| breed       | varchar |     |
| color       | varchar |     |
| city        | varchar |     |
| description | varchar |     |

### Tabel: image

| Name   | Tpye    | Key |
|--------|---------|-----|
| id     | int     | PRI |
| acgurl | varchar |     |
| width  | int     |     |
| height | int     |     |
