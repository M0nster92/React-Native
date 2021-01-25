require("./models/User");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const authRoutes = require("./routes/authRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes)

const mongoUri = "mongodb+srv://sami_92:sami_92@cluster0.dovo5.mongodb.net/track?retryWrites=true&w=majority"

mongoose.connect(mongoUri, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=> {
    console.log("Mongo Database conncted");
})

app.get("/", requireAuth, (req, res) => {
    res.send({email : req.user.email});
})


app.listen(3000, ()=> {
    console.log("Listening on Port 3000")
;})