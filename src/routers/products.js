const { Router } = require('express');
const ProductController = require('../controllers/product');
const InventoryController = require('../controllers/inventory');

const router = Router();

router.get('/', ProductController.getAll);
router.get('/:id', ProductController.getById);
router.post('/', ProductController.create);
router.patch('/:id', ProductController.update);
router.delete('/:id', ProductController.remove);

router.get('/:id/estoque', InventoryController.getById);
router.patch('/:id/estoque', InventoryController.update);
router.delete('/:id/estoque', InventoryController.remove);

module.exports = router;
