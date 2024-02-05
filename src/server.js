const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.get("/", (req, res) => {
  const smtp = nodemailer.createTestAccount({
    host: "smtp.gamil.com",
    port: 587,
    secure: true,
    auth: {
      user: "adaobegginer@gmil.com",
      pass: process.env.PASS,
    },
  });

  const configEmail = {
    form: "adaobegginer@gmil.com",
    to: "adaobegginer@gmil.com",
    subject: "emplememting nodemail",
    html: "<a src='www.facebool.com'> Opem Facebok</a>",
  };
  res.send("message: server running");
});

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
