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
margin:10px 0;
&:hover{
  transform:scale(1.02);
  transition:all 0.3s;
}
`
const DateText = styled.p`
margin-bottom:10px;
`
const Title = styled.span`
  font-size:22px;
`
const Content = styled.p`
width:550px;
font-size:22px;
white-space:nowrap;
overflow:hidden;
text-overflow:ellipsis;
`
const Price = styled.span`
font-size:22px;
float:right
`
const DescFlex = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`
const FlexLayout = styled.div`
  display:flex;
  flex-direction:row;
`
const List = ({ navigate, items, selectedMonth }) => {
  const filteredItems = items.filter((item)=>{
    const itemDate = new Date(item.date);
    const itemMonth = itemDate.getMonth()
    return itemMonth === selectedMonth;
  })
  return (
    <ListLayout>
      {filteredItems.map((item) => (
        <Item key={item.id} onClick={()=>{navigate(`/detail-page/${item.id}`)}}>
          <DateText>{item.date}</DateText>
          <DescFlex >
            <FlexLayout style={{display:'flex', flexDirection:'row'}}>
              <Title >{item.title}</Title>
              <span style={{margin: "0px 15px", fontSize:"22px"}}> - </span>
              <Content >{item.content} </Content>
            </FlexLayout>
            <div>
              <Price>{item.price}원</Price>
            </div>
          </DescFlex>
        </Item>
      ))}
    </ListLayout>
  )
}

export default List