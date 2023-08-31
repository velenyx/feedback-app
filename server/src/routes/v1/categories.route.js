const express = require('express');
const { categoriesController } = require('../../controllers');

const router = express.Router();

router.route('/').get(categoriesController.getCategories);
router.route('/create').post(categoriesController.createCategory);

module.exports = router;
