const express = require("express");
const app = express();
const bcrypt = require('bcrypt')

app.use(express.json());

const users = [{ username: "wa1ead", password: "wa1ead" }];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", async (req, res)=>{
  try{

  }
  const user ={ username : req.body.username, password : req.body.password}
  res.push(user)
  res.status(201).send()
})

app.listen(3030, console.log("started"));
