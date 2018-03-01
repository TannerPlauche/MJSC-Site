const express = require("express");
const server = express();
const path = require("path");
const port = process.env.PORT || 8000;
const logger = require("morgan");

server.use(logger('dev'));
server.use("/",express.static(path.join(__dirname, "./")));
server.use("/img",express.static(path.join(__dirname, "./img")));
server.use("/css",express.static(path.join(__dirname, "./css")));
server.use("/:any",express.static(path.join(__dirname, "./")));

server.listen(port, () => {
    console.log("running on port", port);
});