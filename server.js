//imports
const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorHandler');
const connectDB = require('./config/db');
const cors = require('cors');

//unused imports
const cardUsers = require('./card_users.json');

const port = process.env.PORT || 5000;
const cors_options = {
    origin: true,
    methods: ["GET","HEAD","PUT","PATCH","POST","DELETE"],
    preflightContinue: true,
    optionsSuccessStatus: 204,
    allowedHeaders: "*",
    exposedHeaders: "*",
    credentials: true,
    maxAge: 600,
    customHeader: "TestHeader"
}
//Database connection
connectDB();

//Routes imports
const app = express();

//Middleware
app.options("*",cors(cors_options)) 
app.use(cors(cors_options));
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

//routes
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes')

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/atm', (req, res) => {
    res.json(cardUsers);
});

const corsTest = (req, res) => {
    res.status(200);
    res.send({ name: "Carlo", food: "Tacos" });
}
app.get('/api/cors-test', corsTest)

//error handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server on port: ${port}`);
});