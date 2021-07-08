const server = require("./server");
const persist = require("./persist");

const portNumber = process.argv[10]|| process.env.PORT||8080;

persist(()=>{
    console.log(`- Trying to access Database`)
    //start server
    console.log(portNumber)
    server.listen(portNumber,()=>{
        console.log(`- Database Accessed`)
        console.log(process.argv);
        console.log(`- Server Running on ${portNumber}`);
    });
});