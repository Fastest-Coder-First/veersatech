// create crud for account using express
const express = require('express');
const router = express.Router();
const Account = require('../models/account');
const auth = require('../middleware/auth');

router.post('/add', auth, (req, res) => {
    const { name, balance, currency, parentId, userId, familyId } = req.body;
    const date = new Date();
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    const account = new Account({
        name : name,
        userId: userId,
        familyId: familyId,
        createdBy: decoded.email,
        createdDate: date,
        parentId: parentId,
        balance: balance,
        currency: currency
    })
    account.save().then((account) => {
        res.status(200).json({ success: true, account })
    }).catch((err) => {
        res.status(400).json({ success: false, err })
    })
})

router.get('/get/:id', auth, (req, res) => {
    Account.findById(req.params.id).then((account) => {
        res.status(200).json({ success: true, account })
    }).catch((err) => {
        res.status(400).json({ success: false, err })
    })
})

router.delete('/delete/:id', auth, (req, res) => {
    Account.findByIdAndDelete(req.params.id).then((account) => {
        res.status(200).json({ success: true, account })
    }).catch((err) => {
        res.status(400).json({ success: false, err })
    })
})

router.put('/update/:id',auth,(req,res)=>{
    const {name, balance, currency, parentId, userId, familyId} = req.body;
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    Account.findByIdAndUpdate(req.params.id,{
        name: name,
        userId: userId,
        familyId: familyId,
        updatedBy: req.user.email,
        updatedDate: new Date(),
        parentId: parentId,
        balance: balance,
        currency: currency
    }).then((account)=>{
        res.status(200).json({success:true,account})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

router.get('/getByFamily/:id',auth,(req,res)=>{
    Account.find({familyId:req.params.id}).then((accounts)=>{
        res.status(200).json({success:true,accounts})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

router.get('/getByUser/:id',auth,(req,res)=>{
    Account.find({userId:req.params.id}).then((accounts)=>{
        res.status(200).json({success:true,accounts})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

module.exports = router;