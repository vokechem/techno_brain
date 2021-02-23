var http = require("http");
var app = require("./app");
const server = http.createServer(app);
server.listen(84, '0.0.0.0');
//server.listen(83, console.log("We have started our server on port 83"));
