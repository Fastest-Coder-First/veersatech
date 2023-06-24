// create mongo user schema in backend\modals\category.js: where schema id, name, parentId, familyId, userId, createdBy, updatedBy, createdDate, updatedDate

const mongoose = require('mongoose');
const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const categorySchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    parentId:{
        type:ObjectId,
        trim:true,
        min:3,
        max:20
    },
    familyId:{
        type:ObjectId,
        trim:true,
        min:3,
        max:20
    },
    userId:{
        type:ObjectId,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    createdBy:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    updatedBy:{
        type:String,
        trim:true,
        min:3,
        max:20
    },
    createdDate:{
        type:Date,
        trim:true
    },
    updatedDate:{
        type:Date,
        trim:true
    },
})

module.exports = mongoose.model('Category',categorySchema);
