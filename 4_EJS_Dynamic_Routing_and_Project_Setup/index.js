const express= require('express');
const path = require('path');
const app = express();

//setting up pareser for the form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setting up static files
app.use(express.static(path.join(__dirname, 'public')));
//set up ejs as the view engine
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("index");
});

app.get("/profile/:username", function(req, res){
    res.send(req.params.username  + " is the username");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});
