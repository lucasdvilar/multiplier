const { Router } = require('express');
const CategoryController = require('../controllers/category');

const router = Router();

router.get('/', CategoryController.getAll);
router.get('/:id', CategoryController.getById);
router.post('/', CategoryController.create);
router.patch('/:id', CategoryController.update);
router.delete('/:id', CategoryController.remove);

module.exports = router;
