const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { feedbackService } = require('../services');
const ApiError = require('../utils/ApiError');
const pick = require('../utils/pick');

const createFeedback = catchAsync(async (req, res) => {
  const feedback = await feedbackService.createFeedback({
    ...req.body,
    user: req.user
  });
  res.status(httpStatus.CREATED).send(feedback);
});

const getFeedbacks = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['category']);
  const options = pick(req.query, ['sortBy', 'page', 'limit']);
  const result = await feedbackService.queryFeedbacks(filter, options);
  res.status(httpStatus.OK).send(result);
});

const getFeedback = catchAsync(async (req, res) => {
  const feedback = await feedbackService.getFeedbackById(req.params.feedbackId);
  if (!feedback) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Feedback does not exist!');
  }
  res.status(httpStatus.CREATED).send(feedback);
});

const incrementFeedbackViewsCount = catchAsync(async (req, res) => {
  const updatedFeedback = await feedbackService.incrementFeedbackViewsCount(req.params.feedbackId);
  res.status(httpStatus.OK).send(updatedFeedback);
});

const rateFeedback = catchAsync(async (req, res) => {
  const ratedFeedback = await feedbackService.rateFeedback(req.params.feedbackId, req.query.rating);
  res.status(httpStatus.OK).send(ratedFeedback);
});

const deleteFeedback = catchAsync(async (req, res) => {
  const deletedFeedback = await feedbackService.deleteFeedback(req.params.feedbackId, req.user);
  res.status(httpStatus.OK).send(deletedFeedback);
});

module.exports = {
  createFeedback,
  getFeedback,
  getFeedbacks,
  incrementFeedbackViewsCount,
  rateFeedback,
  deleteFeedback
};
