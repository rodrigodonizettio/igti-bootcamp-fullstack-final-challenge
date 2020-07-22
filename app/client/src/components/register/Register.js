import React, { useState } from 'react'

import css from './register.module.css'
import { useEffect } from 'react'

export default function Register(props) {
  const { onFilterChangeByPeriod, onEditRegisterClick, onDeleteRegisterClick } = props

  const [day, setDay] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  useEffect(() => {
    setDay(onFilterChangeByPeriod.day)
    setCategory(onFilterChangeByPeriod.category)
    setDescription(onFilterChangeByPeriod.description)
    setValue(onFilterChangeByPeriod.value)
  }, [])

  const handleButtonEdit = () => {
    onEditRegisterClick(onFilterChangeByPeriod)
  }
  
  const handleButtonDelete = () => {
    onDeleteRegisterClick(onFilterChangeByPeriod._id)
  }

  return (
    <div className={css.border}>
      <span className={css.description}>{`Day#${day}`}</span>
      <span className={css.category}>{category}</span>
      <span className={css.description}>{description}</span>
      <span className={css.value}>{`R$ ${value}`}</span>
      <button className={`${css.button} waves-effect waves-light btn blue darken-4`} onClick={handleButtonEdit}><i className={`${css.a} material-icons`}>edit</i></button>
      <button className={`${css.button} waves-effect waves-light btn red darken-4`} onClick={handleButtonDelete}><i className={`${css.a} material-icons`}>delete_forever</i></button>
    </div>
  )
}