const Joi = require('joi');

const getFeedbacks = {
  query: Joi.object().keys({
    category: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer()
  })
};

const rateFeedback = {
  query: Joi.object().keys({
    rating: Joi.number().min(1).max(5)
  })
};

module.exports = { getFeedbacks, rateFeedback };
