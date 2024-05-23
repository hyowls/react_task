import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const DetailPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={()=>{
        navigate('/')
      }}>
        누르면 메인페이지로 이동
      </button>
    </div>
  )
}

export default DetailPage