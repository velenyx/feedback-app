const httpStatus = require('http-status');
const { Category } = require('../models');
const ApiError = require('../utils/ApiError');

const getCategories = async () => {
  const categories = await Category.find();
  return categories;
};

const createCategory = async (newCategory) => {
  if (!newCategory || !newCategory.trim()) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Set the category!');
  }
  const existsInDb = await Category.findOne({ category: newCategory });
  if (existsInDb) {
    throw new ApiError(httpStatus.CONFLICT, 'Such category already exists!');
  }
  const category = Category.create({ category: newCategory });
  return category;
};

module.exports = { getCategories, createCategory };
