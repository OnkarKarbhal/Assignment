var http = require('http');
var express = require('express');

var app = express()

app.get('/', (req, res)=> {
    res.send('Hello World!');
});

app.listen(4000);
console.log('Server is listening');