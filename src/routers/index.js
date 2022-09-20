const { Router } = require('express');
const productRoutes = require('./products');

const router = Router();

router.use('/produtos', productRoutes);

module.exports = router;
