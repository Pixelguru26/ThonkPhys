// const http = require("http");

// const hostname = "10.0.0.101";
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("content-Type", "text/plain");
//     res.end("This says WHATEVER I DAMNED WELL PLEASE!\n");
// });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })

const http = require("http");
const express = require("express");
const path = require("path");
const fs = require("fs");

const bodyParser = require("body-parser"); //TODO: research and document bodyparser stuff. I don't remember what it does or why.
const app = express(); // Create the server host app object
//TODO: document these settings
//  Note: app.use, as shown, mounts the function to every api call.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve("page")));

const port = 3000; // hosting port

// Basic request handling
// Prehandling ALL requests
app.route("/").all(function(req,res,next) {
    next();
});

// Handle entry requests (root page)
//TODO: research and document this callback
app.route("/").get(function(req,res,next) {
    res.sendFile(path.resolve("page/main.html"));
});

//TODO: research and document this callback
app.get("/", (request, response) => {
    response.sendStatus(200); // return a 200-okay response
});

//TODO: research and document this line
app.listen(port);