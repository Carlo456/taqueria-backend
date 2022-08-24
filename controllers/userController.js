//import models
const User = require('../models/User');


const registerUser = async (req, res, next) => {
    try {
        await res.json({ message: "user registered" })
    } catch (error) {
        next(error)
    }
}

const loginUser = async (req, res, next) => {
    try {
        await res.json({ message: "login user" })
    } catch (error) {
        next(error)
    }
}

const getUserInfo = async (req, res, next) => {
    try {
        await res.json({ message: "My user info" })
    } catch (error) {
        next(error)
    }
}

const logoutUser = async (req, res, next) => {
    try {
        await res.json({ message: "user loged out" })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    registerUser,
    loginUser,
    getUserInfo,
    logoutUser
}