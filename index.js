const express = require("express");
const winston = require("winston");
const app = express();

app.set("view engine", "ejs");

require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
//require("./startup/config")();

const port = process.env.PORT || 9000;
const server = app.listen(port, () =>
  winston.info(`Listening on port ${port}`)
);
module.exports = server;
