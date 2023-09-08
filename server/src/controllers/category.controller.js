const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { categoryService } = require('../services');

const getCategories = catchAsync(async (req, res) => {
  const categories = await categoriesService.getCategories();
  res.status(httpStatus.FOUND).send(categories);
});

const createCategory = catchAsync(async (req, res) => {
  const { newCategory } = req.body;
  const category = await categoryService.createCategory(newCategory.toLowerCase());

  res.status(httpStatus.CREATED).send(category);
});

module.exports = {
  getCategories,
  createCategory
};
