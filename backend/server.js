//server.js is only responsible for creating the HTTP server and telling it to listen.

const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})