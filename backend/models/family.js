// create mongo user schema in backend\modals\category.js: where schema id, userId, familyName   

const mongoose = require('mongoose');
const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const familySchema = new Schema({
    userId:{
        type:ObjectId,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    familyName:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max
    },
    
})
module.exports = mongoose.model('Family',familySchema);

// Path: family.js
