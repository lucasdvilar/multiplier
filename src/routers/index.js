const { Router } = require('express');
const productRoutes = require('./products');
const categoryRoutes = require('./categories');

const router = Router();

router.use('/produtos', productRoutes);
router.use('/categorias', categoryRoutes);

module.exports = router;
