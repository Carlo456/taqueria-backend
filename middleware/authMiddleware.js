const jwt = require('jsonwebtoken');
const User = require('../models/User')

const protect = async (req, res, next) => {
    let token;
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            try {
                //get token from header
                token = req.headers.authorization.split(' ')[1]
                
                //verify token
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                
                //get user from the token
                req.user = await User.findById(decoded.id).exec()
                console.log(req.user._id)
                next();
            } catch (error) {
                res.status(401)
                return next(new Error('Not Authorization...'));
            }       
        }
        if(!token){
            res.status(401);
            return next(new Error('Not Authorized, no token...')); 
        }
}

module.exports = { 
    protect
}