const express = require('express');
const { categoriesController } = require('../../controllers');
const { categoryValidation } = require('../../validations');
const validate = require('../../middlewares/validate');

const router = express.Router();

router.route('/').get(categoriesController.getCategories);
router.route('/').post(validate(categoryValidation.category), categoriesController.createCategory);

module.exports = router;
