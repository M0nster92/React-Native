require("./models/User");
require("./models/Track");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require("./routes/authRoutes");
const requireAuth = require("./middlewares/requireAuth");
const trackRoutes = require("./routes/trackRoutes");
require('dotenv').config()

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = process.env.CONNECTION_URI;

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