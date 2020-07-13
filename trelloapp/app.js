const express = require('express');
const mongoose = require('mongoose');


// connect database
mongoose.connect('mongodb://localhost:27017/trelloapp',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).
then(() => {console.log("database connected");}).
catch(err => {console.log(err);})

const app = express();

app.use(express.static('public'));
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = require('./routes/trello');
app.use('/trello', router);

app.listen(8080, () => {console.log("Server ready on port 8080");});