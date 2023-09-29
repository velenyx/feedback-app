const Joi = require('joi');

const createCategory = {
  body: Joi.object().keys({
    category: Joi.string().required().min(3)
  })
};

module.exports = { createCategory };
