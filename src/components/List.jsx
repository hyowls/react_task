import React from 'react'
import { ListLayout, Item, DateText, Title, Content, Price, DescFlex, FlexLayout } from './styled/ListStyle';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const List = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const items = useSelector(state => state.items.items)
  const selectedMonth = useSelector(state => state.items.selectedMonth)

  const filteredItems = items.filter((item)=>{
    const itemDate = new Date(item.date);
    const itemMonth = itemDate.getMonth()
    return itemMonth === selectedMonth;
  })
  const handleItemClick = (id) => {
    navigate(`/detail-page/${id}`)
  }

  return (
    <ListLayout>
      {filteredItems.map((item) => (
        <Item key={item.id} onClick={() => {
          handleItemClick(item.id)
        }}>
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