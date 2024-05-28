import React, { useContext, useState } from 'react'
import { FormLayout, Input, SaveBtn } from './styled/FormStyle';
import { Context } from '../context/Context';

const Form = () => {
  const {addItem} = useContext(Context)
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id : crypto.randomUUID(),
      date,
      title,
      price,
      content,
    }
    if(!date.trim() || !title.trim() || !price.trim() || !content.trim()) {
      return alert('모든 항목을 입력해주세요')
    } else {
      addItem(newItem)
      setDate('')
      setTitle('')
      setPrice('')
      setContent('')
    }
  }

  return (
    <FormLayout onSubmit={handleSubmit}>
      <Input type='date' name='user-date' value={date} onChange={(e)=> setDate(e.target.value)}></Input>
      <Input type='text' name='user-title' placeholder='지출 제목' value={title} onChange={(e)=> setTitle(e.target.value)}></Input>
      <Input type='number' name='user-price' placeholder='지출 비용' value={price} onChange={(e)=> setPrice(e.target.value)}></Input>
      <Input type='text' name='user-context' placeholder='지출 내용' value={content} onChange={(e)=> setContent(e.target.value)}></Input>
      <SaveBtn type='submit'>저장</SaveBtn>
    </FormLayout>
  )
}

export default Form