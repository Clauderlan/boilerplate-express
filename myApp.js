let express = require('express');
let app = express();
console.log("hello world")

// Answering the GET Request with HTML file.
app.get("/root", (req, res) => {
    absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath);
})

































 module.exports = app;
