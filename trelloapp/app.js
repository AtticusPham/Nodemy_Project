const express = require('express');




const app = express();


// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = require('./routes/trello');
app.use('/trello', router);

app.listen(8080, () => {console.log("Server ready on port 8080");});