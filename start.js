var http = require("http");
var app = require("./app");
const server = http.createServer(app);
server.listen(84, console.log("App running on port 84"));