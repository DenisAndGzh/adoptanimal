const sql = require("./db.js");

// constructor
class Image {
  constructor(image) {
    this.acgurl = image.acgurl;
    this.width = image.width;
    this.height = image.height;
  }

  static create(newImage, result) {
    sql.query("INSERT INTO image SET ?", newImage, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created image: ", { id: res.insertId, ...newImage });
      result(null, { id: res.insertId, ...newImage });
    });
  }
  static findById(id, result) {
    sql.query(`SELECT * FROM image WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found image: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found image with the id
      result({ kind: "not_found" }, null);
    });
  }
  static getAll(title, result) {
    let query = "SELECT * FROM image";

    if (title) {
      query += ` WHERE title LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("image: ", res);
      result(null, res);
    });
  }
  static updateById(id, image, result) {
    sql.query(
      "UPDATE image SET acgurl = ?, height = ?, width = ? WHERE id = ?",
      [image.acgurl, image.height, image.width, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }

        if (res.affectedRows == 0) {
          // not found image with the id
          result({ kind: "not_found" }, null);
          return;
        }

        console.log("updated image: ", { id: id, ...image });
        result(null, { id: id, ...image });
      }
    );
  }
  static remove(id, result) {
    sql.query("DELETE FROM image WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found image with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("deleted image with id: ", id);
      result(null, res);
    });
  }
  static removeAll(result) {
    sql.query("DELETE FROM image", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log(`deleted ${res.affectedRows} image`);
      result(null, res);
    });
  }
}

module.exports = Image;
