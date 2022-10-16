# Adopt Animal Backend Server

The backend server consists of **nodejs** + **express** + **mysql**  

## Server Type

1. Docker Server (Include node + mysql)
2. pm2 + Local Mysql (need to configure yourself)

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

### Message Api

| Methods | Urls         | Actions                |
|---------|--------------|------------------------|
| GET     | /api/msg     | Get all Message        |
| GET     | /api/msg/:id | Get Message by *id*    |
| POST    | /api/msg     | Add new Message        |
| PUT     | /api/msg/:id | Update Message by *id* |
| DELETE  | /api/msg/:id | Delete Message by *id* |
| DELETE  | /api/msg     | Delete all Message     |

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

### Tabel: message

| Name    | Tpye    | Key |
|---------|---------|-----|
| id      | int     | PRI |
| name    | varchar |     |
| email   | varchar |     |
| message | varchar |     |