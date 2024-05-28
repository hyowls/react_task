import React, { useContext } from 'react'
import { MonthLayout, MonthBtn } from './styled/MonthStyle'
import { Context } from '../context/Context'

const Month = () => {
  const { selectedMonth, setSelectedMonth } = useContext(Context)
  const months = [
    1,2,3,4,5,6,7,8,9,10,11,12
  ]
  const ActiveHandler = (index) => {
    setSelectedMonth(index);
  }
  return (
    <MonthLayout>
      {months.map((month, index)=>(
        <MonthBtn key={index} selected={selectedMonth === index} onClick={()=>ActiveHandler(index)}>{month}월</MonthBtn>
      ))}
    </MonthLayout>
  )
}

export default Month