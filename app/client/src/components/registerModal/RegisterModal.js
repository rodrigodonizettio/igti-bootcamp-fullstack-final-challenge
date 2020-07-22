import React, { useState } from 'react'
import Modal from 'react-modal'

import css from './registerModal.module.css'

export default function RegisterModal(props) {
  const { onSave, onEdit, onEditing, onClose } = props
  
  const [errorMessage, setErrorMessage] = useState('')
  // const [register, setRegister] = useState({})

  const handleClose = () => {
    onClose(null)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formData = {
      id: onEdit._id,
      description: document.getElementById('inputDescription').value,
      value: document.getElementById('inputValue').value,
      category: document.getElementById('inputCategory').value,
      year: document.getElementById('inputDate').value.split('-')[0],
      month: document.getElementById('inputDate').value.split('-')[1],
      day: document.getElementById('inputDate').value.split('-')[2],
      yearMonth: document.getElementById('inputDate').value.split('-')[0] + '-' +  document.getElementById('inputDate').value.split('-')[1],
      yearMonthDay: document.getElementById('inputDate').value,
      type: document.getElementById('inputInput').checked === true ? '+' : '-'
    }
    // console.log(formData)
    if(formData.id) {
      onEditing(formData)
    } else {
      onSave(formData)
    }
  }

  const handleSave = () => {

  }

  const handleRadioChange = () => {
    // if(register.type) {
    //   if(register.type === '+') {
    //     document.getElementById('inputInput').checked = true
    //     document.getElementById('inputOutput').checked = false
    //   }
    //   else {
    //     document.getElementById('inputInput').checked = false
    //     document.getElementById('inputOutput').checked = true
    //   }
    // } else {
    //   document.getElementById('inputInput').checked = true
    //   document.getElementById('inputOutput').checked = false
    // }
  }

  let register 
  if(onEdit._id) {
    register = onEdit
  } else {
    register = { }
  }
  console.log(onEdit)

  Modal.setAppElement('#root')

  return (
    <div className={css.modal}>
      <Modal isOpen={true}>
        <div className={css.flexRow}>
          <span className={css.spanMaintenance}>Add/Edit Register</span>
          <button className="waves-effect waves-light btn red dark-4" onClick={handleClose}>X</button>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div>
            <input id="inputInput" name="type" type="radio" value="input" onChange={handleRadioChange} defaultChecked />
            <label className={css.radio} htmlFor="inputInput">Input</label>
            <input id="inputOutput" name="type" type="radio" value="output" onChange={handleRadioChange} />
            <label className={css.radio} htmlFor="inputOutput">Output</label>
          </div>
          <div className="input-field">
            <input id="inputCategory" type="text" defaultValue={register.category} />
            <label className="active" htmlFor="inputCategory">Category:</label>
          </div>
          <div className="input-field">
            <input id="inputDescription" type="text" defaultValue={register.description} />
            <label className="active" htmlFor="inputDescription">Description:</label>
          </div>
          <div className="input-field">
            <input id="inputValue" type="number" defaultValue={register.value} />
            <label className="active" htmlFor="inputValue">Value:</label>
          </div>
          <div className="input-field">
            <input id="inputDate" type="date" defaultValue={register.yearMonthDay} />
            <label className="active" htmlFor="inputDate">Date:</label>
          </div>
          <div className={css.flexRow}>
            <button className="waves-effect waves-light btn green dark-4" onClick={handleSave} disabled={errorMessage.trim() !== ''}>Save</button>
            <span className={`${css.bold} red dark-4`}>{errorMessage}</span>
          </div>
        </form>
      </Modal>
    </div>
  )
}
