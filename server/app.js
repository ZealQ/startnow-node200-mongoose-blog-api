const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const uri = process.env.MONGODB_URI || 'mongodb://heroku_fjfgpqng:ucqd8rktijtr4a4arrkksubv8a@ds229878.mlab.com:29878/heroku_fjfgpqng'

mongoose.connect(uri);
mongoose.Promise = Promise;

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));


app.get('/', (req, res) => {
    res.status(200).send();
});


app.use('/api/users', require('./routes/users'));
app.use("/api/blogs", require("./routes/blogs"))



module.exports = app;