const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// database
mongoose.connect('mongodb://localhost:27017/todolist',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).
then(() => console.log("Database connected")).
catch(error => handleError(error));
// require routes
const router = require('./routes/todolist');


const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static('public'));



app.get("/login/", (req, res) => {
    res.sendFile(path.join(__dirname, "public/login.html"));
})
app.use('/todolist', router);

const PORT = 8080;
app.listen(PORT, () => {console.log(`server ready on port ${PORT}`);});