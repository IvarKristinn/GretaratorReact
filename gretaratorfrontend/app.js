const express = require("express");
const https = require("https");
const path = require("path");

var app = express();

app.use(express.static(path.join(__dirname, "build")));

const port = process.env.PORT || "8080";
app.set("port", port);

const server = https.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
