// create category crud using express 

const express = require("express");
const router = express.Router();
const Category = require("../models/category");
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");

router.post("/add", auth, (req, res) => {
    const { name, parentId, familyId, description } = req.body;
    var token = req.header("Authorization");
  const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const category = new Category({
        name: name,
        description: description,
        userId: decoded.userId,
        createdBy: decoded.email,
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

router.get('/get', (req, res) => {
    var token = req.header("Authorization");
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    let userId = decoded.userId;
    Category.findById({userId : id}).then((category) => {
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
    const {name, parentId, familyId, description} = req.body;
    var token = req.header("Authorization");
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    const date = new Date();
    Category.findByIdAndUpdate(req.params.id,{
        name: name,
        parentId: parentId,
        userId: decoded.userId,
        familyId: familyId,
        categoryId: categoryId,
        updatedBy: decoded.email,
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