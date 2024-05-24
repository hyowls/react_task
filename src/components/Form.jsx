import React, { useState } from 'react'
import styled from 'styled-components'

const FormLayout = styled.form`
width:900px;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
background-color:#E0FBE2;
border-radius:15px;
padding: 20px;
`
const Input = styled.input`
width:150px;
height:30px;
border:none;
border-radius:15px;
background-color:white;
padding:5px 15px;
`
const SaveBtn = styled.button`
width:70px;
height:40px;
border:none;
border-radius:15px;
background-color:#A0DEFF;
&:hover{
  background-color:#5AB2FF;
}
`
const Form = ({ addItem }) => {
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id : crypto.randomUUID(),
      date,
      title,
      price,
      content,
    }
    addItem(newItem)
    setDate('');
    setTitle('');
    setPrice('');
    setContent('');
  }
  return (
    <FormLayout onSubmit={handleSubmit}>
      <Input type='date' value={date} onChange={(e)=> setDate(e.target.value)}></Input>
      <Input type='text' placeholder='지출 제목' value={title} onChange={(e)=> setTitle(e.target.value)}></Input>
      <Input type='number' placeholder='지출 비용' value={price} onChange={(e)=> setPrice(e.target.value)}></Input>
      <Input type='text' placeholder='지출 내용' value={content} onChange={(e)=> setContent(e.target.value)}></Input>
      <SaveBtn type='submit'>저장</SaveBtn>
    </FormLayout>
  )
}

export default Form