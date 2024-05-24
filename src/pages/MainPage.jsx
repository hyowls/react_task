import React, { useState, useEffect } from 'react'
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

  useEffect(() => {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const addItem = (item) => {
    const nextItems = [...items, item];
    setItems(nextItems);
    localStorage.setItem('items', JSON.stringify(nextItems));
  };

  return (
    <MainLayout>
      <Form addItem={addItem}/>
      <Month />
      <List navigate={navigate} items={items} />
    </MainLayout>
  )
}

export default MainPage