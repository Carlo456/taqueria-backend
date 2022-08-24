
//model imports 
const Product = require('../models/Product');


const allProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
    
        res.status(200).json(products);    
    } catch (error) {
        return next(error);
    }
    
};

const createProduct = async (req, res, next) => {
    try {
        if(!req.body.nombre){
            res.status(400);
        }

        const product = await Product.create({
            name: req.body.name,
            price: req.body.price
        })
        res.status(200).json(product);

    } catch (error) {
        return next(error);
    }
    
}

const getProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            res.status(400);
            throw new Error('Bad request, product not found...');
        }
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
    
};

const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            res.status(400);
            throw new Error('Bad request, product not found...');
        }

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        next(error);
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            res.status(400);
            throw new Error('Bad request, product not found...');
        }

        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedProduct);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    allProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
};