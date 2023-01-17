const sql = require("./db.js");

// constructor
class Animal {
  constructor(animal) {
    this.name = animal.name;
    this.type = animal.type;
    this.age = animal.age;
    this.sex = animal.sex;
    this.weight = animal.weight;
    this.breed = animal.breed;
    this.color = animal.color;
    this.city = animal.city;
    this.description = animal.description;
  }

  static create(newAnimal, result) {
    sql.query("INSERT INTO animal SET ?", newAnimal, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created animal: ", { id: res.insertId, ...newAnimal });
      result(null, { id: res.insertId, ...newAnimal });
    });
  }
  static findById(id, result) {
    sql.query(`SELECT * FROM animal WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found animal: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found animal with the id
      result({ kind: "not_found" }, null);
    });
  }
  static findByName(name, result) {
    sql.query(`SELECT * FROM animal WHERE name = '${name}'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found animal: ", res);
        result(null, res);
        return;
      }

      // not found animal with the name
      result({ kind: "not_found" }, null);
    });
  }
  static findByBreed(breed, result) {
    sql.query(`SELECT * FROM animal WHERE breed = '${breed}'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found animal: ", res);
        result(null, res);
        return;
      }

      // not found animal with the breed
      result({ kind: "not_found" }, null);
    });
  }
  static getAll(title, result) {
    let query = "SELECT * FROM animal";

    if (title) {
      query += ` WHERE title LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("animal: ", res);
      result(null, res);
    });
  }

  static getRandom(result) {
    let query =
      "SELECT * FROM animal WHERE id >= ((SELECT MAX(id) FROM animal)-(SELECT MIN(id) FROM animal)) * RAND() + (SELECT MIN(id) FROM animal) LIMIT 6";

    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("animal: ", res);
      result(null, res);
    });
  }

  static updateById(id, animal, result) {
    sql.query(
      "UPDATE animal SET name = ?, type = ?, age = ?, sex = ?, weight = ?, breed = ?, color = ?, city = ?, description = ?  WHERE id = ?",
      [
        animal.name,
        animal.type,
        animal.age,
        animal.sex,
        animal.weight,
        animal.breed,
        animal.color,
        animal.city,
        animal.description,
        id,
      ],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }

        if (res.affectedRows == 0) {
          // not found animal with the id
          result({ kind: "not_found" }, null);
          return;
        }

        console.log("updated animal: ", { id: id, ...animal });
        result(null, { id: id, ...animal });
      }
    );
  }
  static remove(id, result) {
    sql.query("DELETE FROM animal WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found animal with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("deleted animal with id: ", id);
      result(null, res);
    });
  }
  static removeAll(result) {
    sql.query("DELETE FROM animal", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log(`deleted ${res.affectedRows} animal`);
      result(null, res);
    });
  }
}

module.exports = Animal;
