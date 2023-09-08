const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { categoriesService } = require('../services');

const getCategories = catchAsync(async (req, res) => {
  const categories = await categoriesService.getCategories();
  res.status(httpStatus.FOUND).send(categories);
});

module.exports = {
  getCategories
};
