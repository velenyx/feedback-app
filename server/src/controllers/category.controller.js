const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { categoryService } = require('../services');

const getCategories = catchAsync(async (req, res) => {
  const categories = await categoryService.getCategories();
  res.status(httpStatus.OK).send(categories);
});

const createCategory = catchAsync(async (req, res) => {
  const { category } = req.body;
  const newCategory = await categoryService.createCategory(category.toLowerCase());

  res.status(httpStatus.CREATED).send(newCategory);
});

module.exports = {
  getCategories,
  createCategory
};
