const Joi = require('joi');

const createCategory = {
  body: Joi.object().keys({
    categories: Joi.array().min(1).items(Joi.string().min(3))
  })
};

module.exports = { createCategory };
