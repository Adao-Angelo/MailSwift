const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.get("/", (req, res) => {
  const smtp = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "adaobegginer@gmail.com",
      pass: process.env.PASS,
    },
  });

  const configEmail = {
    from: "adaobegginer@gmail.com",
    to: "gomesangelotest@gmail.com",
    replyTo: "gomesangelotest@gmail.com",
    subject: "emplememting nodemail",
    html: "<a src='www.facebool.com'> Opem Facebok</a>",
  };

  smtp
    .sendMail(configEmail)
    .then((info) => {
      res.send(info);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
