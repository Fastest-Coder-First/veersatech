// create user schema in backend\modals\account.js: where schema contains id, name, balance, currency, parentId, familyId, userId, createdby, updatedby, createddate, updateddate
const mongoose = require('mongoose');
const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const accountSchema = new Schema({
    name:{
        type:String,
        trim:true
    },
    balance:{
        type:Number,
        trim:true
    },
    currency:{
        type:String,
        required:true,
        trim:true
    },
    parentId:{
        type: String,
        trim:true
    },
    familyId:{
        type:String,
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
module.exports = mongoose.model('Account',accountSchema);