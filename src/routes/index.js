const routes = require("express").Router();

const linkGenerateController = require("../controllers/linkGenerateController");

routes.get("/", (_req, res) => {
  res.status(200).json({ message: "Link Generate for whatsapp by TakeBlip" });
});

routes.post("/", linkGenerateController);

module.exports = routes;
