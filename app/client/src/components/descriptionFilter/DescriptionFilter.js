import React from 'react'

import css from './descriptionFilter.module.css'

export default function Filter(props) {
  const { onFilterChangeByDescription } = props

  let filterText

  const handleKeyUp = () => {
    filterText = document.getElementById('descFilter').value
    onFilterChangeByDescription(filterText)
  }

  return (
    <div className={css.margin}>
      <input type="text" id="descFilter" onKeyUp={handleKeyUp} placeholder="Type to search by Description" />
    </div>
  )
}
