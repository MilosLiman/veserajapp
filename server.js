const express = require("express");
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');
//const MongoClient = require('mongodb').MongoClient;

const { Db } = require('mongodb');


const bodyParser = require('body-parser');
const path = require('path');
const port = 3000;

const Message = require('./model/Message');
const Router = require('./router/routes');


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// app.set('view engine', 'ejs');


mongoose.connect('mongodb://localhost:27017/veserajapp');


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use(Router);

app.listen(port, () => {
    console.log(`Connection on port ${port}`);
  });

