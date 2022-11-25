//import models
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body
        if(!name || !email || !password){
            await res.status(400)
            throw new Error("User already exist...")
        }

        //encrypt password 
        //const salt = await bcrypt.genSalt(10)
        //const hashedPassword = await bcrypt.hash(password, salt)

        const userExists = await User.findOne({email});

        if(userExists){
            res.status(400)
            throw new Error("Invalid or existing email...")
        }

        const user = await User.create({ 
            name,
            email,
            password
        });

        if(user){
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            });
        } else {
            res.status(400)
            throw new Error('Invalid user data')
        }
    } catch (error) {
        next(new Error('Error while registering a new user...'))
    }
}

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({email});

        if(user && password){
            res.json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)
            })
        } else {
            res.status(400)
            throw new Error('Invalid credentials...')
        }

    } catch (error) {
        next(new Error('Error with the credentials or session...'))
    }
}

const getUserInfo = async (req, res, next) => {
    try {
        
        const { _id, name, email } = await User.findById(req.user._id)
        res.status(200).json({
            id: _id,
            name,
            email
        })
    } catch (error) {
        next(new Error('Incorrect information...'))
    }
}

const logoutUser = async (req, res, next) => {
    try {
        await res.json({ message: "user loged out..." })
    } catch (error) {
        next(new Error("Error while loggin out..."))
    }
}

//generate JWT
const generateToken = ( id ) => {
    return jwt.sign({ id }, process.env.JWT_SECRET,{
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getUserInfo,
    logoutUser
}