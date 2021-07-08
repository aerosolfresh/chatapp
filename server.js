const express = require("express");
const cors = require("cors");
const {Message} = require("./model");
const server = express();

server.use(cors);
server.use(express.json());
server.use(express.static('static'));

server.get("/message", (req, res)=>{
    res.setHeader("ContentType", "application/json");
    console.log("We are getting the thread");
    Message.find({}, (err, message)=>{
        if (err){
            console.log("There was an issue getting the messages")
            res.status(500).send(
                JSON.stringify({
                    message:"Unable to grab our threads",
                    error:err
                })
            );
            return;
        }
        res.status(200).json(message);
    })
});
server.get("/message/:id", (req,res)=>{
    res.setHeader("ContentType", "application/json");
    console.log(`We are getting the thread with id ${req.params.id}`);
    Message.findById(req.params.id, (err, message)=>{
        
    })
});
module.exports = server;