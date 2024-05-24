import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DetailPage = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const storageData = localStorage.getItem('items')
  const storageItems = JSON.parse(storageData)
  const storageItem = storageItems.find(item => String(item.id) === id)

  return (
    <div>
      <h1>디테일 페이지</h1>
      {
        (storageItem) ? (
          <>
            <p>{storageItem.date}</p>
            <p>{storageItem.content}</p>
            <p>{storageItem.title}</p>
            <p>{storageItem.price}</p>
          </>
        ) : (<p>없음</p>)
      }
      <button onClick={()=>{
        navigate('/')
      }}>
        누르면 메인페이지로 이동
      </button>
    </div>
  )
}

export default DetailPage