const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/Demo9'));

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/Demo9/index.html'));
});

app.listen(process.env.PORT || 8080);


// "start": "node server.js",
// "postinstall" : "ng build --aot --prod"
/*
"engines": {
    "node": "~",
    "npm" : "~"
}
*/ 
