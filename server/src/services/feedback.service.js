const httpStatus = require('http-status');
const { Feedback, Category } = require('../models');
const ApiError = require('../utils/ApiError');

const createFeedback = async (feedbackBody) => {
  const existingCategory = await Category.findOne({ category: feedbackBody.category });
  if (!existingCategory) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No such existing category');
  }
  const feedback = await Feedback.create({ ...feedbackBody });
  return feedback;
};

const getFeedbackById = async (id) => {
  const feedback = await Feedback.findById(id).populate(['client', 'user']).exec();
  if (!feedback) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Feedback does not exist!');
  }
  return feedback;
};
const getFeedbackByCategory = async (query) => {
  const { page, pageSize, category, sortBy, order } = query;
  if (!category || !category.trim()) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Set the category!');
  }
  const options = {
    page,
    limit: pageSize,
    sortBy: `${sortBy}:${order}`
  };
  const filter = {
    rating: { $exists: true },
    category
  };
  return Feedback.paginate(filter, options);
};

const incrementFeedbackViewsCount = async (feedbackId) => {
  const updatedFeedback = await Feedback.findOneAndUpdate(
    { _id: feedbackId },
    { $inc: { views: 1 } },
    { new: true }
  );
  return updatedFeedback;
};

const rateFeedback = async (feedbackId, rating) => {
  const feedback = await getFeedbackById(feedbackId);
  feedback.rating = rating;
  const ratedFeedback = await feedback.save();
  return ratedFeedback;
};

const deleteFeedback = async (feedbackId, user) => {
  const feedback = await getFeedbackById(feedbackId);
  const feedbackUser = feedback.user;
  if (
    (!(user.role === 'admin') &&
      feedbackUser &&
      !(user._id.toString() === feedbackUser._id.toString())) ||
    (!(user.role === 'admin') && !feedbackUser)
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not creator of this feedback!');
  }
  const deletedFeedback = await Feedback.deleteOne({ _id: feedbackId });

  return deletedFeedback;
};

module.exports = {
  createFeedback,
  getFeedbackById,
  getFeedbackByCategory,
  incrementFeedbackViewsCount,
  rateFeedback,
  deleteFeedback
};
