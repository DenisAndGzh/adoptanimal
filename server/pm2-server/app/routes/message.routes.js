module.exports = (app) => {
  const message = require("../controllers/message.controller.js");

  var router = require("express").Router();

  // Create a new Image
  router.post("/", message.create);

  // Retrieve all Message
  router.get("/", message.findAll);

  // Retrieve a single Image with id
  router.get("/:id", message.findOne);

  // Update a Image with id
  router.put("/:id", message.update);

  // Delete a Image with id
  router.delete("/:id", message.delete);

  // Delete all Message
  router.delete("/", message.deleteAll);

  app.use("/api/msg", router);
};
