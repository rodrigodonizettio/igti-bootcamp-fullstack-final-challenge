import React from 'react'
import Register from '../register/Register'

import css from './registerList.module.css'

export default function RegisterList(props) {
  const { onEditClick, onDeleteClick } = props

  const handleEditClick = () => {
    onEditClick(true)
  }

  const handleDeleteClick = (id) => {
    onDeleteClick(id)
  }

  return (
    <div className={css.border}>
      <div>
        <Register onEditRegisterClick={handleEditClick} onDeleteRegisterClick={handleDeleteClick} />
      </div>
    </div>
  )
}
