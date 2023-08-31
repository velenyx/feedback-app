const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { categoriesService } = require('../services');

const getCategories = catchAsync(async (req, res) => {
  const categories = await categoriesService.getCategories();
  res.status(httpStatus.CREATED).send(categories);
});

const createCategory = catchAsync(async (req, res) => {
  const { newCategory } = req.body;
  const category = await categoriesService.createtCategory(newCategory.toLowerCase());

  res.send(category);
});

module.exports = {
  getCategories,
  createCategory
};
