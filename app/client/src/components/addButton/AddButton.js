import React from 'react'

import css from './addButton.module.css'

export default function AddButton(props) {
  const { onButtonClick } = props

  const handleButtonClick = () => {
    onButtonClick(true)
  }

  return (
    <div className={css.center}>
      <button className={`${css.button} waves-effect waves-light btn gray darken-4`} onClick={handleButtonClick} >Add New Register</button>
    </div>
  )
}
