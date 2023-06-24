// create auth middleware
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = (req,res,next)=>{
    const token = req.header('Authorization');
    if(!token) return res.status(401).json({success:false,message:'Access denied'})
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        User.findById(decoded._id).then((user)=>{
            req.user = user;
            next();
        }).catch((err)=>{
            res.status(400).json({success:false,err})
        })
    }catch(err){
        res.status(400).json({success:false,err})
    }
}

module.exports = auth;