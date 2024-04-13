require("dotenv").config();
const express = require('express')
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send("welcome to twitter world")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port }`);
  console.log(process.env)
});


