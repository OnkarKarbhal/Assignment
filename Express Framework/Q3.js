var express = require('express');
var app = express();
var port = process.argv[2];

app.get('/', (req, res) => {
    res.send('Hello from Disney Land!');
});


app.listen(port);
console.log(port + " is listening!");

