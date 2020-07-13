const express = require('express');
const transactionRouter = express.Router();
const TransactionModel = require('../models/TransactionModel');

transactionRouter.get('/', async (req, res) => {
  try {
    const urlParams = new URLSearchParams(req.query)
    const period = urlParams.get('period')
    let transactions
    if(period) {
      transactions = await TransactionModel.find({yearMonth: period})
    } else {
      res.status(400).send('GET must have a valid /:period in yyyy-mm format')
    }
    if(transactions)
      res.status(200).send(transactions)
  } catch (error) {
    res.status(501).send('GET /?period=yyyy-mm Fail! ' + error)
  }
})

module.exports = transactionRouter;
