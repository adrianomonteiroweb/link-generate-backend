const { linkGenerateHandler, errorConstructor } = require("../utils/functions");
const { checkLinkGenerate } = require("../utils/schemaValidation");

const linkGenerateService = async (requestBody) => {
  const { whatsapp, message, type } = requestBody;

  const { error } = checkLinkGenerate.validate({ whatsapp, message });

  if (error) return errorConstructor(400, error.message);

  const linkWhatsapp = await linkGenerateHandler(whatsapp, message, type);

  return linkWhatsapp;
};

module.exports = linkGenerateService;
