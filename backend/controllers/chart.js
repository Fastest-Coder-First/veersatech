// create chart crud using express

const express = require('express');
const router = express.Router();
const Category = require('../models/category');
const Transaction = require('../models/transaction');
const auth = require('../middleware/auth');

router.get('/get/:id', auth, (req, res) => {
    let transactions = [];
    Transaction.find({ userId: req.params.id }).then((transaction) => {
        transactions = transaction;
    }).catch((err) => { 
        res.status(400).json({ success: false, err })
    })
    let categories = [];
    Category.findById(req.params.id).then((Category) => {
        categories = Category;
    }).catch((err) => {
        res.status(400).json({ success: false, err })
    })
    let charts = [];
    categories.map((category) => {   
        let categoryId = category._id;
        let categoryAmount = 0;
        let categortyName = category.name;
        transactions.map((transaction) => {
            if (category._id === transaction.categoryId) {
                categoryAmount = categoryAmount + transaction.amount;
            }
        })
        charts.push({
            categoryId,
            categoryAmount,
            categortyName
        })
    })
    res.status(200).json({ success: true, charts })
})

router.get('/getMonthwiseExpense/:id', auth, (req, res) => {
    let expenses = [];
    //filter transactions by month
    Transaction.find({ userId: req.params.id }).then((transaction) => {
        expenses = transaction;
    }).catch((err) => {
        res.status(400).json({ success: false, err })
    })


    let monthwiseExpense = [];
    expenses.map((expense) => {
        let month = expense.createdDate.getMonth();
        let year = expense.createdDate.getFullYear();
        let amount = expense.amount;
        let monthName = expense.createdDate.toLocaleString('default', { month: 'long' });
        let monthYear = monthName + ' ' + year;
        let monthYearId = month + '' + year;
        let monthYearAmount = 0;
        // fliter if monthwiseExpense already exists
        let flag = true;
        monthwiseExpense.map((monthwiseExpense) => {
            if (monthYearId === monthwiseExpense.monthYearId) {
                flag = false;
            }
        })
        if(flag){
            expenses.map((expense) => {
                if (monthYearId === (expense.createdDate.getMonth() + '' + expense.createdDate.getFullYear())) {
                    monthYearAmount = monthYearAmount + expense.amount;
                }
            })
            monthwiseExpense.push({
                monthYearId,
                monthYear,
                monthYearAmount
            })
        }
    })
    res.status(200).json({ success: true, monthwiseExpense })
})

module.exports = router;

