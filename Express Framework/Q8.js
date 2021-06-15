var express = require('express');
var path = require('path');
var app = express();

//const DatePug = require('./Q8.pug')

app.set('Q8', path.join(__dirname, 'views'));
app.set('view engine', 'Pug');

app.get('/',(req, res)=>{
    var date = new Date();
    res.render('Q8', {date: date.toDateString()});
});

app.listen(8000, ()=>{
    console.log("Server is listening");
});