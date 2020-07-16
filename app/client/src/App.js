import React from 'react';
import Title from './components/title/Title';
import YearMonthFilter from './components/yearMonthFilter/YearMonthFilter';
import MonthSummary from './components/monthSummary/MonthSummary';
import AddButton from './components/addButton/AddButton';
import DescriptionFilter from './components/descriptionFilter/DescriptionFilter';
import RegisterList from './components/registerList/RegisterList';

export default function App() {
  return (<div>
    <Title />
    <YearMonthFilter />
    <MonthSummary />
    <AddButton />
    <DescriptionFilter />
    <RegisterList />
  </div>)
}
