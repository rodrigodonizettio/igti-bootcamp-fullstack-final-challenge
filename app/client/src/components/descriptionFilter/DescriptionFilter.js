import React from 'react'

import css from './descriptionFilter.module.css'

const handleKeyUp = () => {
  
}

export default function Filter() {
  return (
    <div className={css.margin}>
      <input type="text" id="descFilter" onKeyUp={handleKeyUp} placeholder="Type to search by Description" />
    </div>
  )
}
