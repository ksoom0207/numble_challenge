const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const db = require('./db.js');
require("dotenv").config();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require('./route/index.js')(app)


app.user("/", router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
