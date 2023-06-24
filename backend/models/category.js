// create mongo user schema in backend\modals\category.js: where schema id, name, parentId, familyId, userId, createdBy, updatedBy, createdDate, updatedDate

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    name:{
        type:String,
        trim:true
    },
    parentId:{
        type:String,
        trim:true
    },
    familyId:{
        type:String,
        trim:true
    },
    userId:{
        type:String,
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
