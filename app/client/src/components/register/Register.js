import React from 'react'

import css from './register.module.css'

export default function Register(props) {
  const { onEditRegisterClick, onDeleteRegisterClick } = props

  const handleButtonEdit = () => {
    onEditRegisterClick()
  }
  
  const handleButtonDelete = () => {
    onDeleteRegisterClick(1)
  }

  return (
    <div className={css.border}>
      <span className={css.category}>Mercado</span>
      <span className={css.description}>Compras em Padaria</span>
      <span className={css.value}>R$ 16</span>
      <button className={`${css.button} waves-effect waves-light btn blue darken-4`} onClick={handleButtonEdit}><i className={`${css.a} material-icons`}>edit</i></button>
      <button className={`${css.button} waves-effect waves-light btn red darken-4`} onClick={handleButtonDelete}><i className={`${css.a} material-icons`}>delete_forever</i></button>
    </div>
  )
}

// {
//   "description": "Compras em padaria",
//   "value": 16,
//   "category": "Mercado",
//   "year": 2019,
//   "month": 1,
//   "day": 1,
//   "yearMonth": "2019-01",
//   "yearMonthDay": "2019-01-01",
//   "type": "-"
// },