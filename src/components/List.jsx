import React, { useContext, useState, useEffect } from 'react'
import { ListLayout, Item, DateText, Title, Content, Price, DescFlex, FlexLayout } from './styled/ListStyle';
import { Context } from '../context/Context';
import { useNavigate } from 'react-router-dom';

const List = () => {
  const navigate = useNavigate()
  const { items, selectedMonth} = useContext(Context)
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