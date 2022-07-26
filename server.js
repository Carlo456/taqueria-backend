//express and env imports
const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

//Routes imports

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:false }));

const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);

app.listen(port, () => {
    console.log(`Server on port: ${port}`);
});