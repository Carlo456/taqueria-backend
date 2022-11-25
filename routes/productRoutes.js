const express = require('express');
const router = express.Router();

const { allProducts, createProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware')

router.route('/')
    .get(allProducts)
    .post(protect, createProduct);

router.route('/:id')
    .get(getProduct)
    .put(protect,updateProduct)
    .delete(protect, deleteProduct);

module.exports = router;