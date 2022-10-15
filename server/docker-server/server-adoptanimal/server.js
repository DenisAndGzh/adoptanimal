require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({ extended: true })
); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "This is backend server for Adopt Animal." });
});
app.get("/api", (req, res) => {
  res.json({
    message: "We provide the following apis: /api/animal /api/img /api/msg.",
  });
});

require("./app/routes/animal.routes.js")(app);
require("./app/routes/image.routes.js")(app);
require("./app/routes/message.routes.js")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
