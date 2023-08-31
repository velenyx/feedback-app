const Joi = require('joi');
const { newCategoryName } = require('./custom.validation');

const category = {
  body: Joi.object().keys({
    newCategory: Joi.string().required().custom(newCategoryName)
  })
};

module.exports = { category };
