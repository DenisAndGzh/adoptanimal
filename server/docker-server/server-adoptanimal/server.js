process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const https = require("https");
const fs = require("fs");

const app = express();

const privateKey = fs.readFileSync("./certificate/private.key", "utf8");
const certificate = fs.readFileSync("./certificate/certificate.crt", "utf8");
const cert = { key: privateKey, cert: certificate };

app.use(cors());

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

const httpsServer = https.createServer(cert, app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;

httpsServer.listen(PORT, function () {
  console.log(`HTTPS Server is running on port ${PORT}.`);
});
