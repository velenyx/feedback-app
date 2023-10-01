const Joi = require('joi');

const getFeedbacks = {
  query: Joi.object().keys({
    category: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer()
  })
};

module.exports = { getFeedbacks };
