const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var itemsArray = [{id:0, names: 'Electronics'},{id:1, names: 'Groceris'},{id:2, names: 'Lifestyle'}]


//1
app.get('/items', function(req, res)
{
    res.send(itemsArray);
})

//3
app.get('/items/:id', function(req, res)
{

    var itemID = parseInt(req.params.id);
    console.log(itemID);
    var items = itemsArray.find(item => item.id === itemID);
    console.log(items);
    if(items)
    {
        res.send(items);
    }
})

//post
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/items', (req, res) => {
    var item = req.body;
    itemsArray.push(item);
    res.send("Item added successfully");
});

app.listen(3000)
console.log('port:3000 listening');