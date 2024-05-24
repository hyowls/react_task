import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Form from '../components/Form'
import Month from '../components/Month'

const MainPage = () => {
  const Layout = styled.div`
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
  // const navigate = useNavigate();

  return (
    <Layout>
      <Form />
      <Month />
          {/* <button onClick={()=>{
      navigate('/detail-page')
    }}>
      클릭시 상세페이지로 이동
    </button> */}
    </Layout>
  )
}

export default MainPage