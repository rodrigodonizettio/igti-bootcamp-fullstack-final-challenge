// const mongoose = require('mongoose');
// const ObjectId = mongoose.Types.ObjectId;
const axios = require('axios')

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
// const TransactionModel = require('../models/TransactionModel');

const BASE_URL = 'http://localhost:3001/api/transaction'

const getByPeriod = async (period) => {
  try {
    return await axios.get(`${BASE_URL}?period=${period}`)
  } catch (error) {
    console.log(error)
  }
}

const create = async (newRegister) => {
  try {
    return await axios.post(`${BASE_URL}`, newRegister)
  } catch (error) {
    console.log(error)
  }
}

const update = async (updatedRegister) => {
  try {
    return await axios.patch(`${BASE_URL}/${updatedRegister.id}`, updatedRegister)
  } catch (error) {
    console.log(error)
  }
}

const remove = async (id) => {
  try {
    return await axios.delete(`${BASE_URL}/${id}`)
  } catch (error) {
    console.log(error)
  }
}

export { getByPeriod, create, update, remove }