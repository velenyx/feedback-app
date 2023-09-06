const Joi = require('joi');
const { createCategory } = require('./custom.validation');

const category = {
  body: Joi.object().keys({
    newCategory: Joi.string().required().min(3)
  })
};

module.exports = { category };
