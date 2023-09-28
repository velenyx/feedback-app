const { Category } = require('../../src/models');

const insertFeedbacks = async () => {
  await Category.create([
    {
      category: 'freelance'
    }
  ]);
};

module.exports = {
  insertFeedbacks
};
