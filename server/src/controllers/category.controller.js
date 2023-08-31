const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const categoryService = require('../services/category.service');

const ApiError = require('../utils/ApiError');

const getCategories = catchAsync(async (req, res) => {
  const categories = await categoryService.getCategories();
  res.status(httpStatus.CREATED).send(categories);
});

module.exports = {
  getCategories
};
