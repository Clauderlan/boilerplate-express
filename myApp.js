let express = require('express');
let app = express();
console.log("hello world")

// Adicionando os arquivos estaticos que o HTML precisa. (CSS) Adding the static files that HTML needs.

let absolutePath = __dirname + "/public";
app.use("/public", express.static(absolutePath))

// Answering the GET Request with HTML file.
app.get("/root", (req, res) => {
    let absolutePath = __dirname + "/views/index.html"
    res.sendFile(absolutePath);
})

































 module.exports = app;
