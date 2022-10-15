const sql = require("./db.js");

// constructor
const animal = function (animal) {
  this.name = animal.name;
  this.type = animal.type;
  this.age = animal.age;
  this.sex = animal.sex;
  this.weight = animal.weight;
  this.breed = animal.breed;
  this.color = animal.color;
  this.city = animal.city;
  this.description = animal.description;
};

animal.create = (newanimal, result) => {
  sql.query("INSERT INTO animal SET ?", newanimal, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created animal: ", { id: res.insertId, ...newanimal });
    result(null, { id: res.insertId, ...newanimal });
  });
};

animal.findById = (id, result) => {
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
};

animal.getAll = (title, result) => {
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
};

animal.updateById = (id, animal, result) => {
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
};

animal.remove = (id, result) => {
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
};

animal.removeAll = (result) => {
  sql.query("DELETE FROM animal", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} animal`);
    result(null, res);
  });
};

module.exports = animal;
