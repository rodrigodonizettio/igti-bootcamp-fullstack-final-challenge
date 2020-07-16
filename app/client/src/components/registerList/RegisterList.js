import React from 'react'
import Register from '../register/Register'

import css from './registerList.module.css'

export default function RegisterList() {
  return (
    <div className={css.border}>
      <div>
        <Register />
      </div>
      <div>
        <Register />
      </div>
    </div>
  )
}
