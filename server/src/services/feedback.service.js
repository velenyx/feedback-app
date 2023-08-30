const httpStatus = require('http-status');
const { Feedback, User } = require('../models');
const ApiError = require('../utils/ApiError');

const createFeedback = async (feedbackBody) => {
  const client = await User.findById(feedbackBody.clientId);
  if (!client) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
  }
  const feedback = await Feedback.create({ ...feedbackBody, client });
  return feedback;
};

const getFeedbackById = async (id) => {
  return Feedback.findById(id).populate(['client', 'user']).exec();
};

module.exports = { createFeedback, getFeedbackById };
