import React, { useState, useEffect } from 'react'

import css from './yearMonthFilter.module.css'

let yyyymmSelect

const yyyy = ['2019', '2020', '2021']
const mm = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
let yyyymm = []

yyyy.forEach(y => {
  mm.forEach(m => {
    yyyymm.push(`${y}-${m}`)
  })
})

export default function YearMonthFilter(props) {
  const { onFilterChangeByPeriod } = props

  const [currentYearMonth, setCurrentYearMonth] = useState('2019-01')

  useEffect(() => {
    yyyymmSelect = document.getElementById('yyyymmSelect')
    onFilterChangeByPeriod(currentYearMonth)
  }, [])

  const handleBackwardButtonClick = () => {
    handleSelectChange(yyyymmSelect.selectedIndex - 1)
  }
  
  const handleForwardButtonClick = () => {
    handleSelectChange(yyyymmSelect.selectedIndex + 1)
  }

  const handleSelectChange = (event) => {
    // console.log(event)
    if(event.target) {
      setCurrentYearMonth(event.target.value)
    } else {
      let newIndex = event
      yyyymmSelect.selectedIndex = event
      setCurrentYearMonth(yyyymmSelect.options[newIndex].value)
    }
    // console.log(currentYearMonth)
    onFilterChangeByPeriod(currentYearMonth)
  }

  return (
    <div className={css.display}>
      <button className={`${css.button} waves-effect waves-light btn gray darken-4`} onClick={handleBackwardButtonClick} ><i className={`${css.a} material-icons`}>arrow_back_ios</i></button>
      <select id="yyyymmSelect" className={css.display} onChange={handleSelectChange} >
      {
          yyyymm.map(v => {
            return <option key={v} value={v}>{v}</option>
          })
      }
      </select>
      <button className={`${css.button} waves-effect waves-light btn gray darken-4`} onClick={handleForwardButtonClick} ><i className={`${css.a} material-icons`}>arrow_forward_ios</i></button>
    </div>
  )
}
