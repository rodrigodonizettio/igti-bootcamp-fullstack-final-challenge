import React from 'react'

import css from './yearMonthFilter.module.css'

const handleButtonClick = () => {
  console.log('Oba')
}

const yyyy = ['2019', '2020', '2021']
const mm = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
let yyyymm = []

yyyy.forEach(y => {
  mm.forEach(m => {
    yyyymm.push(`${y}-${m}`)
  })
})

export default function YearMonthFilter() {
  return (
    <div className={css.display}>
      <button className={`${css.button} waves-effect waves-light btn gray darken-4`} onClick={handleButtonClick} ><i className={`${css.a} material-icons`}>arrow_back_ios</i></button>
      <select id="yyyymmSelect" className={css.display}>
      {
          yyyymm.map(v => {
            return <option key={v} value={v}>{v}</option>
          })
      }
      </select>
      <button className={`${css.button} waves-effect waves-light btn gray darken-4`} onClick={handleButtonClick} ><i className={`${css.a} material-icons`}>arrow_forward_ios</i></button>
    </div>
  )
}
