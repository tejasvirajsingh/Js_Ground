const http = require('http');
const server = http.createServer((req, res)=>{
    res.write("Hello mr Max")
    res.end()
});

var  port= 5085;
server.listen(port, ()=>{
    console.log(`server started at http://localhost:${port}`)

});