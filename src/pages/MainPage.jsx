import React from 'react'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>메인페이지</h1>
      <button onClick={()=>{
        navigate('/detail-page')
      }}>
        클릭시 상세페이지로 이동
      </button>
    </div>
  )
}

export default MainPage