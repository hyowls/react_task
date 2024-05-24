import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Form from '../components/Form'
import Month from '../components/Month'
import List from '../components/List'

const MainLayout = styled.div`
width:1000px;
border-radius:20px;
background-color:#ACE1AF;
margin:30px auto;
padding:20px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const MainPage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const addItem = (item) => {
    setItems([...items, item]);
  }
  return (
    <MainLayout>
      <Form addItem={addItem}/>
      <Month />
      <List navigate={navigate} items={items} />
    </MainLayout>
  )
}

export default MainPage