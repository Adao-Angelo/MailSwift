import Router from "express";
import { SendEmail } from "./controller.js";

const router = Router();

router.post("/send", (request, response) => {
  const sendEmail = new SendEmail();
  sendEmail.execute(request, response);
});

export { router };
