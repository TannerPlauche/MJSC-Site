const express = require("express");
const server = express();
const path = require("path");
const port = process.env.PORT || 8765;
const logger = require("morgan");
const runner = require("./shellRunner");


server.use(logger('dev'));
server.use("/", express.static(path.join(__dirname, "./build/")));
server.use("/public", express.static(path.join(__dirname, "./build/")));
// server.use("/img",express.static(path.join(__dirname, "./img")));
// server.use("/css",express.static(path.join(__dirname, "./css")));
server.use("/:any", express.static(path.join(__dirname, "./")));

server.use("/pull/and/restart", function (req, res) {
    runner();
    res.send("updated");
});

server.listen(port, () => {
    console.log("running on port", port);
});