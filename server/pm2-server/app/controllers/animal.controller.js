const Animal = require("../models/animal.model.js");

// Create and Save a new Animal
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a Animal
  const animal = new Animal({
    name: req.body.name,
    type: req.body.type,
    age: req.body.age,
    sex: req.body.sex,
    weight: req.body.weight,
    breed: req.body.breed,
    color: req.body.color,
    city: req.body.city,
    description: req.body.description,
  });

  // Save Animal in the database
  Animal.create(animal, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Animal.",
      });
    else res.send(data);
  });
};

// Retrieve all Animals from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  Animal.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Animals.",
      });
    else res.send(data);
  });
};

// Find a single Animal by Id
exports.findOne = (req, res) => {
  Animal.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Animal with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Animal with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Update a Animal identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  console.log(req.body);

  Animal.updateById(req.params.id, new Animal(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Animal with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Error updating Animal with id " + req.params.id,
        });
      }
    } else res.send(data);
  });
};

// Delete a Animal with the specified id in the request
exports.delete = (req, res) => {
  Animal.remove(req.params.id, (err) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Animal with id ${req.params.id}.`,
        });
      } else {
        res.status(500).send({
          message: "Could not delete Animal with id " + req.params.id,
        });
      }
    } else res.send({ message: `Animal was deleted successfully!` });
  });
};

// Delete all Animals from the database.
exports.deleteAll = (_req, res) => {
  Animal.removeAll((err) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Animals.",
      });
    else res.send({ message: `All Animals were deleted successfully!` });
  });
};
