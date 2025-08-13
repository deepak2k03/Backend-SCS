const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.send("champion mera anuj");
});

app.get("/about", function(req, res){
    res.send("about page hai ye");
});

app.get("/profile", function(req, res, next){
    return next(new Error("Not implemented"));
});
