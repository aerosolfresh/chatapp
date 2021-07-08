const express = require("express");
const cors = require("cors");
const {Message} = require("./model");
const server = express();

server.use(cors);
server.use(express.json());
server.use(express.static('static'));

app.use((req,res,next)=>{
    console.log(
    "- Time: ",Date.now(),
    " - Method: ",req.method,
    " - Path: ",req.originalUrl,
    " - Body: ",req.body);
    next();
});

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
})

server.delete("/message",(req,res)=>{
    res.setHeader("Content-Type","application/json")
    console.log(`-> Delete function is running`)

    Message.findByIdAndDelete(req.params.id,(err,result)=>{
        if(err){            
            res.status(500).json({
                message:`>>> Unable to delete message ${req.params.id}`,
                error:err
            });
        }    
        if(numOfDelTodo===null){   
            res.status(404).json({
                message:`could not find message ${req.params.id} to delete`,
                error:err
            });
        }
        res.status(200).json(result);
    })
})


server.get("/message/:id", (req,res)=>{
    res.setHeader("ContentType", "application/json");
    console.log(`We are getting the thread with id ${req.params.id}`);
    Message.findById(req.params.id, (err, message)=>{
        
    })
});
module.exports = server;