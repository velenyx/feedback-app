const { Category } = require('../models');

const getCategories = async () => {
  const categories = await Category.find();
  return categories;
};

module.exports = { getCategories };
