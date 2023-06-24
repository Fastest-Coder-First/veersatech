// create category crud using express

const express = require('express');
const router = express.Router();
const Category = require('../models/category');
const auth = require('../middleware/auth');

router.post('/add', auth, (req, res) => {
    const { name, userId, parentId, familyId } = req.body;
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    const category = new Category({
        name: name,
        description: description,
        userId: userId,
        createdBy: req.user.email,
        createdDate: new Date(),
        parentId: parentId,
        familyId: familyId
    })
    category.save().then((category) => {
        res.status(200).json({ success: true, category })
    }).catch((err) => {
        res.status(400).json({ success: false, err })
    })
})

router.get('/get/:id', (req, res) => {
    Category.findById(req.params.id).then((category) => {
        res.status(200).json({ success: true, category })
    }).catch((err) => {
        res.status(400).json({ success: false, err })
    })
})

router.delete('/delete/:id', (req, res) => {
    Category.findByIdAndDelete(req.params.id).then((category) => {
        res.status(200).json({ success: true, category })
    }).catch((err) => {
        res.status(400).json({ success: false, err })
    })
})

router.put('/update/:id',auth,(req,res)=>{
    const {name, userId, createdBy, updatedBy, parentId, familyId} = req.body;
    const date = new Date();
    Category.findByIdAndUpdate(req.params.id,{
        name: name,
        parentId: parentId,
        userId: userId,
        familyId: familyId,
        categoryId: categoryId,
        updatedBy: req.user.email,
        updatedDate: date
    }).then((transaction)=>{
        res.status(200).json({success:true,transaction})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

router.get('/getall',auth,(req,res)=>{
    Category.find().then((category)=>{
        res.status(200).json({success:true,category})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

router.get('/getByFamilyId/:id',auth,(req,res)=>{
    Category.find({familyId:req.params.id}).then((category)=>{
        res.status(200).json({success:true,category})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

router.get('/getByUserId/:id',auth,(req,res)=>{
    Category.find({userId:req.params.id}).then((category)=>{
        res.status(200).json({success:true,category})
    }).catch((err)=>{
        res.status(400).json({success:false,err})
    })
})

module.exports = router;