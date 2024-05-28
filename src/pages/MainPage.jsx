import React from 'react'
import Form from '../components/Form'
import Month from '../components/Month'
import List from '../components/List'
import { Layout } from '../components/styled/MainPageStyle'
import { useDispatch, useSelector } from 'react-redux'

const MainPage = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.items.items)
  const selectedMonth = useSelector(state => state.items.selectedMonth)

  return (
      <Layout>
        <Form />
        <Month />
        <List items={items} selectedMonth={selectedMonth} />
      </Layout>
  )
}

export default MainPage