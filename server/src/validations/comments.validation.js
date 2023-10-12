const Joi = require('joi');

const createComemntOrReply = {
  body: Joi.object().keys({
    text: Joi.string().required().min(10),
    reply_to: Joi.allow()
  })
};

module.exports = { createComemntOrReply };
