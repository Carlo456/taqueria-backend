//imports
const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorhandler');
const port = process.env.PORT || 5000;

//Routes imports
const app = express();

//Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

//routes
const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);

//error handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server on port: ${port}`);
});