// create mongo user schema in backend\modals\category.js: where schema id, name, parentId, familyId, userId, createdBy, updatedBy, createdDate, updatedDate

const mongoose = require('mongoose');
const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const categorySchema = new Schema({
    name:{
        type:String,
        trim:true
    },
    parentId:{
        type:ObjectId,
        trim:true
    },
    familyId:{
        type:ObjectId,
        trim:true
    },
    userId:{
        type:ObjectId,
        trim:true
    },
    createdBy:{
        type:String,
        trim:true
    },
    updatedBy:{
        type:String,
        trim:true
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
