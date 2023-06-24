// create crud api for transaction using express
const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');
const User = require('../models/user');
const auth = require('../middleware/auth');

router.post('/add',auth,(req,res)=>{
    const {amount,description,categoryId, accountId, familyId, userId, createdBy, updatedBy, createdDate, updatedDate} = req.body;
    const transaction = new Transaction({
        amount,
        description,
        userId,
        familyId,
        categoryId,
        accountId,
        credit,
        debit,
        createdBy,
        updatedBy,
        createdDate,
        updatedDate
    })
    transaction.save().then((transaction)=>{
        res.status(200).json({success:true,transaction})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

router.get('/get/:id',auth,(req,res)=>{
    Transaction.findById(req.params.id).then((transaction)=>{
        res.status(200).json({success:true,transaction})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

router.put('/update/:id',auth,(req,res)=>{
    const {amount,description,categoryId, accountId, familyId, userId, createdBy, updatedBy, createdDate, updatedDate} = req.body;
    Transaction.findByIdAndUpdate(req.params.id,{
        amount,
        description,
        userId,
        familyId,
        categoryId,
        accountId,
        credit,
        debit,
        createdBy,
        updatedBy,
        createdDate,
        updatedDate
    }).then((transaction)=>{
        res.status(200).json({success:true,transaction})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

router.delete('/delete/:id',auth,(req,res)=>{
    Transaction.findByIdAndDelete(req.params.id).then((transaction)=>{
        res.status(200).json({success:true,transaction})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

router.get('/getByUser/:id',auth,(req,res)=>{
    Transaction.find({userId:req.params.id}).then((transactions)=>{
        res.status(200).json({success:true,transactions})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

router.get('/getByFamily/:id',auth,(req,res)=>{
    Transaction.find({familyId:req.params.id}).then((transactions)=>{
        res.status(200).json({success:true,transactions})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

router.get('/getByCategory/:id',auth,(req,res)=>{
    Transaction.find({categoryId:req.params.id}).then((transactions)=>{
        res.status(200).json({success:true,transactions})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

router.get('/getByAccount/:id',auth,(req,res)=>{
    Transaction.find({accountId:req.params.id}).then((transactions)=>{
        res.status(200).json({success:true,transactions})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

router.get('/getByUserAndFamily/:userId/:familyId',auth,(req,res)=>{
    Transaction.find({userId:req.params.userId,familyId:req.params.familyId}).then((transactions)=>{
        res.status(200).json({success:true,transactions})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

router.get('/getByUserAndCategory/:userId/:categoryId',auth,(req,res)=>{
    Transaction.find({userId:req.params.userId,categoryId:req.params.categoryId}).then((transactions)=>{
        res.status(200).json({success:true,transactions})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

router.get('/getByUserAndAccount/:userId/:accountId',auth,(req,res)=>{
    Transaction.find({userId:req.params.userId,accountId:req.params.accountId}).then((transactions)=>{
        res.status(200).json({success:true,transactions})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

router.get('/getByFamilyAndCategory/:familyId/:categoryId',auth,(req,res)=>{
    Transaction.find({familyId:req.params.familyId,categoryId:req.params.categoryId}).then((transactions)=>{
        res.status(200).json({success:true,transactions})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

module.exports = router;
