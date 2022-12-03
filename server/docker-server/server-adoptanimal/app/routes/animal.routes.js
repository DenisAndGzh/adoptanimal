module.exports = (app) => {
  const animals = require("../controllers/animal.controller.js");

  var router = require("express").Router();

  // Create a new Animal
  router.post("/", animals.create);

  // Retrieve all animals
  router.get("/", animals.findAll);

  // Retrieve 6 random animals
  router.get("/random", animals.random);

  // Retrieve all animals with name
  router.get("/name/:name", animals.findByName);

  // Retrieve all animals with name
  router.get("/breed/:breed", animals.findByBreed);

  // Retrieve a single animal with id
  router.get("/:id", animals.findOne);

  // Update a Animal with id
  router.put("/:id", animals.update);

  // Delete a animal with id
  router.delete("/:id", animals.delete);

  // Delete all animals
  router.delete("/", animals.deleteAll);

  app.use("/api/animal", router);
};
