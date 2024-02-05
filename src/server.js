const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.get("/", (req, res) => {
  res.send("message: server running");
});

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
