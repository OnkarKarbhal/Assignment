const express = require('express')

const app = express()
app.use(express.static('public'));

app.get('/Q6', function(req,res){
    res.sendFile(__dirname + '/public/Q6.html');

});

app.listen(3000)
console.log('Server is listening')