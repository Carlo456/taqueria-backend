const allProducts = (req, res) => {
    res.status(200).json({ message: "Todos los productos" });
};

const createProduct = (req, res) => {
    res.status(200).json({ message: "Creaste un producto" });
};

const getProduct = (req, res) => {
    res.status(200).json({ message: `El id de tu producto es: ${req.params.id}` });
};

const updateProduct = (req, res) => {
    res.status(200).json({ message: `Se actualizo el producto con id: ${req.params.id}` });
};

const deleteProduct = (req, res) => {
    res.json({ message: `Se borro el producto con id: ${req.params.id}` });
};

module.exports = {
    allProducts,
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct
};