import React, { useState } from 'react'
import styled from 'styled-components'

const MonthLayout = styled.div`
width:900px;
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;
align-items:center;
background-color:#E0FBE2;
border-radius:15px;
margin-top:30px;
padding:20px;
`
const MonthBtn = styled.button`
width: 110px;
height: 70px;
background-color: ${props => (props.isActive ? '#58A399' : 'white')};
color: ${props => (props.isActive ? 'white' : 'black')};
border-radius: 15px;
border: none;
margin: 15px;
cursor: pointer;
&:hover {
  background-color: ${props => (props.isActive ? '#46847b' : '#f0f0f0')};
}
`
const Month = ({ isActive }) => {
  const months = [
    1,2,3,4,5,6,7,8,9,10,11,12
  ]
  const [activeMonth, setActiveMonth] = useState(0);
  const ActiveHandler = (index) => {
    setActiveMonth(index);
  }
  return (
    <MonthLayout>
      {months.map((month, index)=>(
        <MonthBtn key={index} $isActive={isActive} onClick={()=>ActiveHandler(index)}>{month}월</MonthBtn>
      ))}
    </MonthLayout>
  )
}

export default Month