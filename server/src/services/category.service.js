const { Category } = require('../models');

const getCategories = async () => {
  const categories = await Category.find();
  return categories;
};

const createCategory = async (categories) => {
  const createdCategories = [];
  const errors = [];

  await Promise.all(
    categories.map(async (category) => {
      try {
        const existingInDB = await Category.findOne({ category });
        if (existingInDB) {
          errors.push(`Category ${category} exists`);
        } else {
          createdCategories.push(await Category.create({ category }));
        }
      } catch (error) {
        errors.push(error.message);
      }
    })
  );

  return { createdCategories, errors };
};

module.exports = { getCategories, createCategory };
