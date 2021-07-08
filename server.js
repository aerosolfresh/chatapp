const express = require("express");
const cors = require("cors");
const {Message} = require("./model");
const server = express();

server.use(cors);
server.use(express.json());
server.use(express.static('static'));

server.get("/message")

module.exports = server;