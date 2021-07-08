const server = require("./server.js");
const persist = require("./persist.js");

const portNumber =process.argv[10]|| process.env.PORT||8080;

persist.connect(()=>{
    console.log(`- Trying to access Database`)
    //start server
    server.listen(portNumber,()=>{
        console.log(`- Database Accessed`)
        console.log(process.argv);
        console.log(`- Server Running on ${portNumber}`);
    });
});