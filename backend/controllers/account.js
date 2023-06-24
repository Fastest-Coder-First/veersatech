// create crud for account using express
const express = require("express");
const router = express.Router();
const Account = require("../models/account");
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");
var moment = require("moment");

router.post("/add", auth, (req, res) => {
  const { name, balance, currency, parentId, familyId } = req.body;
  const token = req.header("Authorization");
  console.log(token);
  const decoded = jwt.verify(token, process.env.TOKEN_KEY);
  const date = new Date();
  const account = new Account({
    name: name,
    userId: decoded.userId,
    familyId: familyId,
    createdBy: decoded.email,
    createdDate: moment(),
    parentId: parentId,
    balance: balance,
    currency: currency,
  });
  account
    .save()
    .then((account) => {
      res.status(200).json({ success: true, account });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
});

router.get("/get/:id", auth, (req, res) => {
  Account.findById(req.params.id)
    .then((account) => {
      res.status(200).json({ success: true, account });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
});

router.delete("/delete/:id", auth, (req, res) => {
  Account.findByIdAndDelete(req.params.id)
    .then((account) => {
      res.status(200).json({ success: true, account });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
});

router.put("/update/:id", auth, (req, res) => {
  const { name, balance, currency, parentId, familyId } = req.body;
  var token = req.header("Authorization");
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  Account.findByIdAndUpdate(req.params.id, {
    name: name,
    userId: decoded.userId,
    familyId: familyId,
    updatedBy: decoded.email,
    updatedDate: new Date(),
    parentId: parentId,
    balance: balance,
    currency: currency,
  })
    .then((account) => {
      res.status(200).json({ success: true, account });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
});

router.get("/getByFamily/:id", auth, (req, res) => {
  Account.find({ familyId: req.params.id })
    .then((accounts) => {
      res.status(200).json({ success: true, accounts });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
});

router.get("/getByUser/:id", auth, (req, res) => {
  Account.find({ userId: req.params.id })
    .then((accounts) => {
      res.status(200).json({ success: true, accounts });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
});

module.exports = router;
