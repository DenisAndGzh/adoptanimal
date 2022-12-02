const Message = require("../models/message.model.js");

// Create and Save a new Message
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a Message
  const message = new Message({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  });

  // Save Message in the database
  Message.create(message, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Message.",
      });
    else res.send(data);
  });
};

// Retrieve all Messages from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  Message.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Messages.",
      });
    else res.send(data);
  });
};

// Find a single Message by Id
exports.findOne = (req, res) => {
  Message.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Message with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Message with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Update a Message identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  Message.updateById(req.params.id, new Message(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Message with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Message with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Delete a Message with the specified id in the request
exports.delete = (req, res) => {
  Message.remove(req.params.id, (err) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Message with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Message with id " + req.params.id,
        });
      }
    } else res.send({ message: `Message was deleted successfully!` });
  });
};

// Delete all Messages from the database.
exports.deleteAll = (_req, res) => {
  Message.removeAll((err) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Messages.",
      });
    else res.send({ message: `All Messages were deleted successfully!` });
  });
};
