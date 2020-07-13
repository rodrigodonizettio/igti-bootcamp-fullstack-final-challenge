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

transactionRouter.post('/', async (req, res) => {
  try {
    const transaction = new TransactionModel(req.body)
    await transaction.save()
    res.status(201).send(transaction)
  } catch (error) {
    res.status(501).send('POST / Fail! ' + error)
  }
})

transactionRouter.patch('/:id', async (req, res) => {
  try {
    if (!req.body)
      return res.status(400).send('PATCH /:id Fail! Body cannot be empty!');
    const transaction = await TransactionModel.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    if(transaction) {
      res.status(200).send(transaction)
    } else {
      res.status(404).send(`Transaction ID ${req.params.id} was not found!`)
    }
  } catch (error) {
    res.status(501).send('PATCH /:id Fail!' + error)
  }
})

transactionRouter.delete('/:id', async (req, res) => {
  try {
    const transaction = await TransactionModel.findOneAndDelete({_id: req.params.id})
    res.status(200).send(req.params.id)
  } catch (error) {
    res.status(404).send(`Transaction ID ${req.params.id} was not found! ${error}`)
  }
});

module.exports = transactionRouter;
