const { linkGenerateService } = require("../services/wishes.services");

const linkGenerateController = async (req, res, next) => {
  let getLink;

  try {
    getLink = await linkGenerateService(req.body);
  } catch (error) {
    console.error(error.message);
    return next(error);
  }

  return !getLink.code
    ? res.status(200).json({ whatsapp: getLink })
    : res.status(getLink.code).json({ message: getLink.message });
};

module.exports = {
  linkGenerateController,
};
