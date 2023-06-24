// create crud api for transaction using express
const express = require("express");
const router = express.Router();
const Transaction = require("../models/transaction");
const User = require("../models/user");
const auth = require("../middleware/auth");
const jwt = require("jsonwebtoken");

router.post("/add", auth, (req, res) => {
  const {
    amount,
    description,
    categoryId,
    accountId,
    familyId,
    transactionType,
  } = req.body;
  var token = req.header("Authorization");
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const transaction = new Transaction({
    amount: amount,
    description: description,
    userId: decoded.userId,
    familyId: familyId,
    categoryId: categoryId,
    accountId: accountId,
    transactionType: transactionType,
    createdBy: decoded.email,
    createdDate: new Date(),
  });
  transaction
    .save()
    .then((transaction) => {
      res.status(200).json({ success: true, transaction });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
});

router.get("/get/:id", auth, (req, res) => {
  Transaction.findById(req.params.id)
    .then((transaction) => {
      res.status(200).json({ success: true, transaction });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
});

router.put("/update/:id", auth, (req, res) => {
  const {
    amount,
    description,
    categoryId,
    accountId,
    familyId,
    transactionType,
  } = req.body;
  var token = req.header("Authorization");
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  Transaction.findByIdAndUpdate(req.params.id, {
    amount: amount,
    description: description,
    userId: decoded.userId,
    familyId: familyId,
    categoryId: categoryId,
    accountId: accountId,
    transactionType: transactionType,
    updatedBy: decoded.email,
    updatedDate: new Date(),
  })
    .then((transaction) => {
      res.status(200).json({ success: true, transaction });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
});

router.delete("/delete/:id", auth, (req, res) => {
  Transaction.findByIdAndDelete(req.params.id)
    .then((transaction) => {
      res.status(200).json({ success: true, transaction });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
});

router.get("/getByUser/:id", auth, (req, res) => {
  Transaction.find({ userId: req.params.id })
    .then((transactions) => {
      res.status(200).json({ success: true, transactions });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
});

router.get("/getByFamily/:id", auth, (req, res) => {
  Transaction.find({ familyId: req.params.id })
    .then((transactions) => {
      res.status(200).json({ success: true, transactions });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
});

router.get("/getByCategory/:id", auth, (req, res) => {
  Transaction.find({ categoryId: req.params.id })
    .then((transactions) => {
      res.status(200).json({ success: true, transactions });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
});

router.get("/getByAccount/:id", auth, (req, res) => {
  Transaction.find({ accountId: req.params.id })
    .then((transactions) => {
      res.status(200).json({ success: true, transactions });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
});

router.get("/getByUserAndFamily/:userId/:familyId", auth, (req, res) => {
  Transaction.find({ userId: req.params.userId, familyId: req.params.familyId })
    .then((transactions) => {
      res.status(200).json({ success: true, transactions });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
});

router.get("/getByUserAndCategory/:userId/:categoryId", auth, (req, res) => {
  Transaction.find({
    userId: req.params.userId,
    categoryId: req.params.categoryId,
  })
    .then((transactions) => {
      res.status(200).json({ success: true, transactions });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
});

router.get("/getByUserAndAccount/:userId/:accountId", auth, (req, res) => {
  Transaction.find({
    userId: req.params.userId,
    accountId: req.params.accountId,
  })
    .then((transactions) => {
      res.status(200).json({ success: true, transactions });
    })
    .catch((err) => {
      res.status(400).json({ success: false, err });
    });
});

router.get(
  "/getByFamilyAndCategory/:familyId/:categoryId",
  auth,
  (req, res) => {
    Transaction.find({
      familyId: req.params.familyId,
      categoryId: req.params.categoryId,
    })
      .then((transactions) => {
        res.status(200).json({ success: true, transactions });
      })
      .catch((err) => {
        res.status(400).json({ success: false, err });
      });
  }
);

module.exports = router;
