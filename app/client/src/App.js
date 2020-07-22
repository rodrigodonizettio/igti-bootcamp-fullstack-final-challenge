import React, { useState } from 'react';
import Title from './components/title/Title';
import YearMonthFilter from './components/yearMonthFilter/YearMonthFilter';
import MonthSummary from './components/monthSummary/MonthSummary';
import AddButton from './components/addButton/AddButton';
import DescriptionFilter from './components/descriptionFilter/DescriptionFilter';
import RegisterList from './components/registerList/RegisterList';
import RegisterModal from './components/registerModal/RegisterModal';

import { getByPeriod, create, update, remove } from './services/transactionService'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [registersByPeriod, setRegistersByPeriod] = useState([])
  const [registersByPeriodAndDescription, setRegistersByPeriodAndDescription] = useState([])
  const [editingRegister, setEditingRegister] = useState({})

  const handleModalClose = () => {
    setIsModalOpen(false)
    setEditingRegister({})
  }

  const handleModalSave = async (formData) => {
    console.log(formData)
    // const { category, day, description, month, type, value, year, yearMonth, yearMonthDay } = formData
    await create(formData)
    setIsModalOpen(false)
    setEditingRegister({})
  }

  const handleModalEdit = async (formData) => {
    await update(formData)
    setIsModalOpen(false)
    setEditingRegister({})
  }

  const handleModalOpen = (open) => {
    setIsModalOpen(open)
  }

  const handleEditOpen = (register) => {
    setEditingRegister(register)
    setIsModalOpen(true)
  }

  const handleDeleteClick = async (id) => {
   await remove(id)
  }
  
  const handlePeriodFilterChange = (period) => {
    getByPeriodAwait(period)
  }

  const getByPeriodAwait = async (period) => {
    const response = await getByPeriod(period)
    // console.log(response.data)
    setRegistersByPeriod(response.data)
    setRegistersByPeriodAndDescription(response.data)
  }

  const handleDescriptionFilterChange = (descriptionFilter) => {
    const mappedAndFilteredRegisters = registersByPeriod
      .map(v => {
        return {
          _id: v._id,
          category: v.category,
          day: v.day,
          month: v.month,
          year: v.year,
          yearMonth: v.yearMonth,
          yearMonthDay: v.yearMonthDay,
          description: v.description.toLowerCase(),
          type: v.type,
          value: v.value
        }
      })
      .filter(v => {
        return v.description.includes(descriptionFilter.toLowerCase())
      })
    setRegistersByPeriodAndDescription(mappedAndFilteredRegisters)
    // console.log(mappedAndFilteredRegisters)
  }

  return (<div>
    <Title />
    <YearMonthFilter onFilterChangeByPeriod={handlePeriodFilterChange} />
    <MonthSummary onFilterChangeByPeriod={registersByPeriodAndDescription} />
    <AddButton onButtonClick={handleModalOpen}/>
    <DescriptionFilter onFilterChangeByDescription={handleDescriptionFilterChange} />
    <RegisterList onFilterChangeByPeriod={registersByPeriodAndDescription} onEditClick={handleEditOpen} onDeleteClick={handleDeleteClick} />
    {isModalOpen && <RegisterModal onClose={handleModalClose} onSave={handleModalSave} onEdit={editingRegister} onEditing={handleModalEdit} />}
  </div>)
}
