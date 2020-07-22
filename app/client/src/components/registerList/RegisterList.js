import React from 'react'
import Register from '../register/Register'

import css from './registerList.module.css'

export default function RegisterList(props) {
  const { onFilterChangeByPeriod, onEditClick, onDeleteClick } = props

  const handleEditClick = (register) => {
    onEditClick(register)
  }

  const handleDeleteClick = (id) => {
    onDeleteClick(id)
  }

  return (
    <div className={css.border}>
      <div>
        {
          onFilterChangeByPeriod.map(v => {
            return <Register key={v._id} onFilterChangeByPeriod={v} onEditRegisterClick={handleEditClick} onDeleteRegisterClick={handleDeleteClick} />
          })
        }
      </div>
    </div>
  )
}
