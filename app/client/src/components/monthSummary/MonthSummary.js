import React from 'react'

import css from './monthSummary.module.css'

export default function MonthSummary() {
  return (
    <div className={`${css.marginTop} ${css.flexRowBetween}`}>
      <span className={css.bold}>Registers [un.]: </span>
      <span>1</span>
      <span className={css.bold}>Input [R$]: </span>
      <span>10</span>
      <span className={css.bold}>Output [R$]: </span>
      <span>10</span>
      <span className={css.bold}>Balance [R$]: </span>
      <span>0</span>
    </div>
  )
}
