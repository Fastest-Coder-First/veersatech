// create user schema in backend\modals\user.js:
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    email:{
        type:String,
        required:true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 20,
    },
})

module.exports = mongoose.model('User',userSchema);