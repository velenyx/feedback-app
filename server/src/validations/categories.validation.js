const Joi = require('joi');

const newCategory = {
  body: Joi.object().keys({
    newCategory: Joi.string().required().min(3)
  })
};

module.exports = { newCategory };
