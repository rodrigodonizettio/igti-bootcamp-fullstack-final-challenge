const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;
const axios = require('axios')

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');

const BASE_URL = 'http://localhost:3001/api/transaction?period=2019-01'

const getByPeriod = () => {
  axios.get(BASE_URL)
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}

export { getByPeriod }