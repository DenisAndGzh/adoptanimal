const sql = require("./db.js");

// constructor
class Message {
  constructor(message) {
    this.name = message.name;
    this.email = message.email;
    this.message = message.message;
  }

  static create(newMessage, result) {
    sql.query("INSERT INTO message SET ?", newMessage, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      console.log("created message: ", { id: res.insertId, ...newMessage });
      result(null, { id: res.insertId, ...newMessage });
    });
  }
  static findById(id, result) {
    sql.query(`SELECT * FROM message WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.length) {
        console.log("found message: ", res[0]);
        result(null, res[0]);
        return;
      }

      // not found message with the id
      result({ kind: "not_found" }, null);
    });
  }
  static getAll(title, result) {
    let query = "SELECT * FROM message";

    if (title) {
      query += ` WHERE title LIKE '%${title}%'`;
    }

    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log("message: ", res);
      result(null, res);
    });
  }
  static updateById(id, message, result) {
    sql.query(
      "UPDATE message SET name = ?, email = ?, message = ?  WHERE id = ?",
      [message.name, message.email, message.message, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }

        if (res.affectedRows == 0) {
          // not found message with the id
          result({ kind: "not_found" }, null);
          return;
        }

        console.log("updated message: ", { id: id, ...message });
        result(null, { id: id, ...message });
      }
    );
  }
  static remove(id, result) {
    sql.query("DELETE FROM message WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found message with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("deleted message with id: ", id);
      result(null, res);
    });
  }
  static removeAll(result) {
    sql.query("DELETE FROM message", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      console.log(`deleted ${res.affectedRows} message`);
      result(null, res);
    });
  }
}

module.exports = Message;
