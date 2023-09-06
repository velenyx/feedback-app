const Joi = require('joi');

const category = {
  body: Joi.object().keys({
    newCategory: Joi.string().required().min(3)
  })
};

module.exports = { category };
