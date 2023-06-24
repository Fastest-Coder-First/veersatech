// create mongo user schema in backend\modals\transaction.js: where schema id, description, amount, categoryId, accountId, familyId, userId, createdBy, updatedBy, createdDate, updatedDate, credit, debit

const mongoose = require('mongoose');
const Schema = mongoose.Schema,
ObjectId = Schema.ObjectId;
const transactionSchema = new Schema({
    description:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    amount:{
        type:Number,
        required:true,
        trim:true,
        min:0,
        max:1000000
    },
    categoryId:{
        type:ObjectId,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    accountId:{
        type:ObjectId,
        required:true,
        trim:true,
        min:3,
        max:20
    },
    familyId:{
        type:ObjectId,
        required:true,
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
    credit:{
        type:Boolean,
        required:true,
    },
    debit:{ 
        type:Boolean,
        required:true,
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
        required:true,
        trim:true,
        min:3,
        max:20
    },
    createdDate:{
        type:Date,
        required:true,
        trim:true
    },
    updatedDate:{
        type:Date,
        required:true,
        trim:true
    },
})

module.exports = mongoose.model('Transaction',transactionSchema);