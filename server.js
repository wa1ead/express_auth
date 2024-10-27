const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.use(express.json());

const users = [{ username: "wa1ead", password: "wa1ead" }];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = { username: req.body.username, password: hashedPassword };
    console.log(hashedPassword);
    users.push(user);
    res.status(201).send(users);
  } catch (err) {
    res.status(501).send();
  }
});

app.listen(3030, console.log("started"));
