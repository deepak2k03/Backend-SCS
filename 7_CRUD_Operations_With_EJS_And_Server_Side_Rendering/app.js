const express = require("express");
const app = express();

const userModel = require("./usermodel");
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//creare user
app.get("/create", async function (req, res) {
  let createdUser = await userModel.create({
    name: "harshchutiya",
    username: "johndoe",
    email: "lolopolo@gmail.com",
  });

  res.send(createdUser);
});

//read all users
// app.get("/read", async function (req, res) {
//   let users = await userModel.find();
//   res.send(users);
// });

//read one user
app.get("/read", async function (req, res) {
  let users = await userModel.find({name: 'harsh'});
  res.send(users);
});


//update user
app.get("/update", async function (req, res) {
  let updatedUser = await userModel.findOneAndUpdate({username: "johndoe"},{name:"bahenkaloda"});
  res.send(updatedUser);
});


// delete user
app.get("/delete", async function (req, res) {
  let deletedUser = await userModel.findOneAndDelete({name: "harsh"});
  res.send(deletedUser);
});


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
