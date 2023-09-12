const httpStatus = require('http-status');
const { Feedback, User, Category, MyFeedbacks } = require('../models');
const ApiError = require('../utils/ApiError');

const createFeedback = async (feedbackBody) => {
  const client = await User.findById(feedbackBody.clientId);
  const existingCategory = await Category.findOne({ category: feedbackBody.category });
  if (!existingCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No such existing category');
  }
  if (!client) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Client not found');
  }
  await MyFeedbacks.findOneAndUpdate(
    { creator: feedbackBody.user },
    { $push: { feedbacks: { client: feedbackBody.clientId, category: feedbackBody.category } } }
  );
  const feedback = await Feedback.create({ ...feedbackBody, client });
  return { feedback };
};

const getFeedbackById = async (id) => {
  return Feedback.findById(id).populate(['client', 'user']).exec();
};
const getFeedbackByCategory = async (category) => {
  if (!category || !category.trim()) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Set the category!');
  }
  return Feedback.find({ category });
};

module.exports = { createFeedback, getFeedbackById, getFeedbackByCategory };
