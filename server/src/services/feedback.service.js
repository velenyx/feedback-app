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
  return feedback;
};
const getPaginatedFeedbacks = async (query) => {
  const { page, limit, category, sortBy, order } = query;
  const orderOrCriteryUndefined = (!sortBy && order) || (!order && sortBy);
  if (orderOrCriteryUndefined) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Sorting order or critery is missing!');
  }
  const options = {
    page,
    limit,
    sortBy: `${sortBy}:${order}`
  };
  const filter = {
    category: category ?? { $exists: true }
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
  if (!feedback) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Feedback does not exist!');
  }
  feedback.rating = rating;
  const ratedFeedback = await feedback.save();
  return ratedFeedback;
};

const deleteFeedback = async (feedbackId, user) => {
  const feedback = await getFeedbackById(feedbackId);
  if (!feedback) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Feedback does not exist!');
  }
  const feedbackUser = feedback.user;

  const isRequesterAuthor = user._id.toString() === feedbackUser?._id.toString() ?? false;
  const requesterIsNotAdmin = user.role !== 'admin';

  if (requesterIsNotAdmin && !isRequesterAuthor) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'You are not the creator of this feedback!');
  }

  const deletedFeedback = await Feedback.deleteOne({ _id: feedbackId });

  return deletedFeedback;
};

module.exports = {
  createFeedback,
  getFeedbackById,
  getPaginatedFeedbacks,
  incrementFeedbackViewsCount,
  rateFeedback,
  deleteFeedback
};
