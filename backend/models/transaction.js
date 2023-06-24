// create mongo user schema in backend\modals\transaction.js: where schema id, description, amount, categoryId, accountId, familyId, userId, createdBy, updatedBy, createdDate, updatedDate, credit, debit

const mongoose = require("mongoose");
const Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
const transactionSchema = new Schema({
  description: {
    type: String,
    trim: true,
  },
  amount: {
    type: Number,
    trim: true,
  },
  categoryId: {
    type: ObjectId,
    trim: true,
  },
  accountId: {
    type: ObjectId,
    trim: true,
  },
  familyId: {
    type: String,
    trim: true,
  },
  userId: {
    type: ObjectId,
    trim: true,
  },
  transactionType: {
    type: Boolean,
  },
  createdBy: {
    type: String,
    trim: true,
  },
  updatedBy: {
    type: String,
    trim: true,
  },
  createdDate: {
    type: Date,
    trim: true,
  },
  updatedDate: {
    type: Date,
    trim: true,
  },
});

module.exports = mongoose.model("Transaction", transactionSchema);
