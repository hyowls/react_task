import React from 'react'
import styled from 'styled-components'


const Form = () => {
  const FormLayout = styled.div`
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
  return (
    <FormLayout>
      <Input type='date'></Input>
      <Input type='text' placeholder='지출 제목'></Input>
      <Input type='number' placeholder='지출 비용'></Input>
      <Input type='text' placeholder='지출 내용'></Input>
      <SaveBtn>저장</SaveBtn>
    </FormLayout>
  )
}

export default Form