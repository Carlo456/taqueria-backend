//imports
const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorhandler');
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;

//Database connection
connectDB();

//Routes imports
const app = express();

//Middleware 
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

//routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes')

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

//error handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server on port: ${port}`);
});