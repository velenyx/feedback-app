const { Category } = require('../../src/models');

const insertCategories = async () => {
  await Category.create({
    category: 'freelance'
  });
};
module.exports = {
  insertCategories
};
