const httpStatus = require('http-status');
const { Category } = require('../models');
const ApiError = require('../utils/ApiError');

const getCategories = async () => {
  await Category.create({ name: 'freelance' });
  const categories = await Category.find();
  if (!categories.length) {
    throw new ApiError(httpStatus.NOT_FOUND, 'No categories');
  }
  return categories;
};

module.exports = { getCategories };
