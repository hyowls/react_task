import React from 'react'
import styled from 'styled-components'

const ListLayout = styled.div`
width:900px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#E0FBE2;
border-radius:15px;
padding:20px;
margin-top:30px;
`
const Item = styled.div`
width:800px;
background-color:white;
padding:20px;
border-radius:15px;
&:hover{
  transform:scale(1.02);
  transition:all 0.3s;
}
`
const Date = styled.p`
margin-bottom:10px;
`
const Title = styled.span`
  font-size:22px;
`
const Content = styled.span`
font-size:22px;
`
const Price = styled.span`
font-size:22px;
float:right

`
const List = ({ navigate, items }) => {
  return (
    <ListLayout>
      {items.map((item, index) => (
        <Item key={index} onClick={()=>{navigate('/detail-page')}}>
          <Date>{item.date}</Date>
          <Title >{item.title} - </Title>
          <Content >{item.content}</Content>
          <Price>{item.price}원</Price>
        </Item>
      ))}
    </ListLayout>
  )
}

export default List