const jwt = require('jsonwebtoken');
const token = jwt.sign({username: "Thaipham"}, "01061997", function(){
    console.log(token);
});
