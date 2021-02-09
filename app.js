const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());




const postsRoute = require("./routes/posts");
// middleware
app.use("/posts", postsRoute);

//Rota
app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');
});

mongoose.connect(process.env.CONEXAO, { useNewUrlParser: true }, () => console.log("Aeeee conectou"));

app.listen(3000);