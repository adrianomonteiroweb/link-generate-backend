const Joi = require("joi");

const checkLinkGenerate = Joi.object({
  whatsapp: Joi.string()
    .length(11)
    .pattern(/^[0-9]+$/)
    .required(),
  message: Joi.string(),
});

module.exports = {
  checkLinkGenerate,
};
