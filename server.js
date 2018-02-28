const express = require("express");
const server = express();
const path = require("path");

server.use(express.static(path.join(__dirname, "index.html")));

server.listen((process.env.PORT || 8000), ()=> {
    console.log("running on port");
});