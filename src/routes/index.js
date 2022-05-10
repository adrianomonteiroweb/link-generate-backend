const routes = require("express").Router();

routes.get("/", (_req, res) => {
  res.status(200).json({ message: "Link Generate for whatsapp by TakeBlip" });
});

routes.post("/", linkGenerateController);

module.exports = routes;
