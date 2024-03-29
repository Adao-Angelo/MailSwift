import nodemailer from "nodemailer";

class SendEmail {
  constructor() {}

  execute(request, response) {
    const smtp = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "gomesangelotest@gmail.com",
        pass: "------------",
      },
    });

    smtp
      .sendMail({
        from: "	Adao Ângelo <gomesangelotest@gmail.com> ",
        to: "adaobegginer@gmail.com",
        subject: "hello I am Adão Angelo",
        text: "Olá este é um email de text para a minha api",
        html: "<a href='https://www.google.com'> Click aqui </a>",
      })
      .then((message) => {
        response.json({ message: `${message}` });
      })
      .catch((error) => {
        response.json({ message: `Error - ${error}` });
      });
  }
}

export { SendEmail };
