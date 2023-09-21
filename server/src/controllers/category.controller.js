const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { categoryService } = require('../services');

const getCategories = catchAsync(async (req, res) => {
  const categories = await categoryService.getCategories();
  res.status(httpStatus.FOUND).send(categories);
});

const createCategory = catchAsync(async (req, res) => {
  const { categories } = req.body;
  const category = await categoryService.createCategory(categories);

  res.status(httpStatus.CREATED).send(category);
});

module.exports = {
  getCategories,
  createCategory
};
