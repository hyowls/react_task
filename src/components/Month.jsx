import React from 'react'
import { MonthLayout, MonthBtn } from './styled/MonthStyle'
import { setSelectedMonth } from '../redux/modules/ItemSlice'
import { useDispatch, useSelector } from 'react-redux'

const Month = () => {
  const dispatch = useDispatch()
  const selectedMonth = useSelector(state => state.items.selectedMonth)
  const months = [
    1,2,3,4,5,6,7,8,9,10,11,12
  ]
  const ActiveHandler = (index) => {
    dispatch(setSelectedMonth(index))
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