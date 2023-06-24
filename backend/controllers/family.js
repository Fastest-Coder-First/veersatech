// create crud api using express
const express = require('express');
const router = express.Router();
const FamilyModel = require('../models/family');
const auth = require('../middleware/auth');

router.post('/add', auth, (req, res) => {
    const { familyName, userId } = req.body;
    const family = new FamilyModel({
        familyName,
        userId
    })
    family.save().then((family) => {
        res.status(200).json({ success: true, family })
    }).catch((err) => {
        res.status(400).json({ success: false, err })
    })
})

router.get('/get/:id', (req, res) => {
    FamilyModel.findById(req.params.id).then((family) => {
        res.status(200).json({ success: true, family })
    }).catch((err) => {
        res.status(400).json({ success: false, err })
    })
})

router.put('/update/:id', auth, (req, res) => {
    const { familyName, userId } = req.body;
    FamilyModel.findByIdAndUpdate(req.params.id, {
        familyName,
        userId
    }).then((family) => {
        res.status(200).json({ success: true, family })
    }).catch((err) => {
        res.status(400).json({ success: false, err })
    })
})

router.delete('/delete/:id', auth, (req, res) => {
    FamilyModel.findByIdAndDelete(req.params.id).then((family) => {
        res.status(200).json({ success: true, family })
    }).catch((err) => {
        res.status(400).json({ success: false, err })
    })
})

router.get('/getUserById/:id', (req, res) => {
    FamilyModel.find({ userId: req.params.userId }).then((family) => {
        res.status(200).json({ success: true, family })
    }).catch((err) => {
        res.status(400).json({ success: false, err })
    })
})



