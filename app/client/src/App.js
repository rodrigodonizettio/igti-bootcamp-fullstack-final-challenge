import React, { useState } from 'react';
import Title from './components/title/Title';
import YearMonthFilter from './components/yearMonthFilter/YearMonthFilter';
import MonthSummary from './components/monthSummary/MonthSummary';
import AddButton from './components/addButton/AddButton';
import DescriptionFilter from './components/descriptionFilter/DescriptionFilter';
import RegisterList from './components/registerList/RegisterList';
import RegisterModal from './components/registerModal/RegisterModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  const handleModalSave = async (formData) => {
    // const { id, newScore } = formData

    // const newGrades = Object.assign([], allGrades)

    // let gradeToBeSaved = newGrades.find(v => v.id === id)
    // gradeToBeSaved.value = newScore

    // if(gradeToBeSaved.isDeleted) {
    //   gradeToBeSaved.isDeleted = false
    //   await gradesApi.postGrade(gradeToBeSaved)
    // } else {
    //   gradeToBeSaved.isDeleted = false
    //   await gradesApi.putGrade(gradeToBeSaved)
    // }

    setIsModalOpen(false)
  }

  const handleModalOpen = (open) => {
    setIsModalOpen(open)
  }

  const handleEditOpen = (open) => {
    setIsModalOpen(open)
  }

  const handleDeleteClick = (id) => {
   console.log('Will Delete!')
   console.log(id) 
  }

  return (<div>
    <Title />
    <YearMonthFilter />
    <MonthSummary />
    <AddButton onButtonClick={handleModalOpen}/>
    <DescriptionFilter />
    <RegisterList onEditClick={handleEditOpen} onDeleteClick={handleDeleteClick} />
    {isModalOpen && <RegisterModal onClose={handleModalClose} onSave={handleModalSave} />}
  </div>)
}
