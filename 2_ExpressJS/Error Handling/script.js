const express = require('express');

const app= express();


//setting up middleware
app.use(function(req, res, next) {
    console.log('Middleware executed');
    next(); // Pass control to the next middleware or route handler
});

//another middleware example
app.use(function(req, res, next) {
    console.log('Another middleware executed');
    next(); // Pass control to the next middleware or route handler
});


//setting up routes
app.get('/', function(req, res) {
    res.send('this is route 1 after middlewares');
});


app.get("/profile", function(req, res, next){
    return next(new Error("Not implemented"));
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

app.listen(3002);