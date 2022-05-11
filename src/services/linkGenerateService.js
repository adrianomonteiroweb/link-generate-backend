const { linkGenerateHandler, errorConstructor } = require("../utils/functions");
const { checkLinkGenerate } = require("../utils/schemaValidation");

const linkGenerateService = async (requestBody) => {
  const { whatsapp, message } = requestBody;

  const { error } = checkLinkGenerate.validate({ whatsapp, message });

  if (error) return errorConstructor(401, error.message);

  const linkWhatsapp = await linkGenerateHandler(whatsapp, message);

  return linkWhatsapp;
};

module.exports = linkGenerateService;
