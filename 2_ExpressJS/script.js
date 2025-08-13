const express= require('express');

const app= express();

//setting up routes
app.get('/', function(req, res) {
    res.send('this is route 1');
});
app.get('/profile', function(req, res) {
    res.send('this is route 2');
});

app.listen(3000);