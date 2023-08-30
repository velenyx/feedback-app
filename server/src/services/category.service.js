const httpStatus = require('http-status');
const { Feedback, User, Category } = require('../models');
const ApiError = require('../utils/ApiError');

const getCategories = async () => {
  const newFeedback = await Category.create({ name: 'freelance' });
  const feedbacks = await Category.find();
  if (!feedbacks.length) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No categories');
  }
  return feedbacks;
};

module.exports = { getCategories };
