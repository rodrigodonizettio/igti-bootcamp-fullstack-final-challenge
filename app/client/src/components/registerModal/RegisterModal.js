import React, { useState } from 'react'
import Modal from 'react-modal'

import css from './registerModal.module.css'

export default function RegisterModal(props) {
  const { onSave, onClose } = props
  
  const [errorMessage, setErrorMessage] = useState('')

  const handleClose = () => {
    onClose(null)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const formData = {
      // id,
      // newScore: scoreValue
    }
    onSave(formData)
  }

  const handleSave = () => {

  }

  const handleDateChange = () => {

  }

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
            <input id="inputInput" name="type" type="radio" value="input" defaultChecked />
            <label className={css.radio} htmlFor="inputInput">Input</label>
            <input id="inputOutput" name="type" type="radio" value="output" />
            <label className={css.radio} htmlFor="inputOutput">Output</label>
          </div>
          <div className="input-field">
            <input id="inputCategory" type="text" />
            <label className="active" htmlFor="inputCategory">Category:</label>
          </div>
          <div className="input-field">
            <input id="inputDescription" type="text" />
            <label className="active" htmlFor="inputDescription">Description:</label>
          </div>
          <div className="input-field">
            <input id="inputValue" type="number" />
            <label className="active" htmlFor="inputValue">Value:</label>
          </div>
          <div className="input-field">
            <input id="inputDate" type="date" onChange={handleDateChange} />
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
