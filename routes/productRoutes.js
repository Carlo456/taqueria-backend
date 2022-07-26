const express = require('express');
const router = express.Router();

const { allProducts, createProduct, getProduct, updateProduct, deleteProduct } = require('../controllers/productController');

router.route('/')
    .get(allProducts)
    .post(createProduct);

router.route('/:id')
    .get(getProduct)
    .put(updateProduct)
    .delete(deleteProduct);

module.exports = router;