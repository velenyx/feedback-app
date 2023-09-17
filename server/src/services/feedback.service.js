const httpStatus = require('http-status');
const { Feedback, User, Category } = require('../models');
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
  const feedback = await Feedback.create({ ...feedbackBody, client });
  return feedback;
};

const getFeedbackById = async (id) => {
  return Feedback.findById(id).populate(['client', 'user']).exec();
};
const getFeedbackByCategory = async (category, pageSize, page) => {
  if (!category || !category.trim()) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Set the category!');
  }
  const paginateOptions = {
    page: 2,
    pagesize: 5
  };
  return Feedback.paginate({ category }, { page: 2, pagesize: 10 });
};

module.exports = { createFeedback, getFeedbackById, getFeedbackByCategory };
