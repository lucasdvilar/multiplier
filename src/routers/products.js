const { Router } = require('express');
const ProductController = require('../controllers/product');

const router = Router();

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getById);
router.post('/', ProductController.create);
router.patch('/:id', ProductController.update);
router.delete('/:id', ProductController.remove);

module.exports = router;
