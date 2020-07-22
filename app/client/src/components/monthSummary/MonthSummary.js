import React from 'react'

import css from './monthSummary.module.css'

export default function MonthSummary(props) {
  const { onFilterChangeByPeriod } = props

  let iSum = onFilterChangeByPeriod
    .filter(v => v.type === '+')
    .reduce((acc, cur) => acc + cur.value, 0)

  let oSum = onFilterChangeByPeriod
    .filter(v => v.type === '-')
    .reduce((acc, cur) => acc + cur.value, 0)

  return (
    <div className={`${css.marginTop} ${css.flexRowBetween}`}>
      <span className={css.bold}>Registers [un.]: </span>
      <span>{onFilterChangeByPeriod.length}</span>
      <span className={css.bold}>Input [R$]: </span>
      <span>{iSum}</span>
      <span className={css.bold}>Output [R$]: </span>
      <span>{oSum}</span>
      <span className={css.bold}>Balance [R$]: </span>
      <span>{iSum - oSum}</span>
    </div>
  )
}
