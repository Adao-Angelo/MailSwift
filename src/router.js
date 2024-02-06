import Router from "express";

const router = Router();

router.post("send", (request, response) => {
  console.log("enviar email");
});

export { router };
