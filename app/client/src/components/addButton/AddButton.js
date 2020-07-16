import React from 'react'

import css from './addButton.module.css'

const handleButtonClick = () => {

}

export default function AddButton() {
  return (
    <div className={css.center}>
      <button className={`${css.button} waves-effect waves-light btn gray darken-4`} onClick={handleButtonClick} >New Register</button>
    </div>
  )
}
