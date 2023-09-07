const Joi = require('joi');

const createCategory = {
  body: Joi.object().keys({
    newCategory: Joi.string().required().min(3)
  })
};

module.exports = { createCategory };
