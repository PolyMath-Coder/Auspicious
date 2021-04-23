const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Bios = require('./Models/Model');
const app = express();
const dbKeys = require('./config/keys').mongoURI
const bigRouter = require('./routes/api/route');

mongoose.connect(dbKeys, {useNewUrlParser: true}).then (()=> {
    console.log("MONGODB Well connected...");
});

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

app.use("/api/route", bigRouter);
const port = 3001;

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});


