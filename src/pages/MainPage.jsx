import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Form from '../components/Form'
import Month from '../components/Month'
import List from '../components/List'
import { Layout } from '../components/styled/MainPageStyle'
import { Context } from '../context/Context'

const MainPage = () => {
  const {items, addItem, selectedMonth, setSelectedMonth} = useContext(Context)

  return (
      <Layout>
        <Form addItem={addItem} />
        <Month selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />
        <List items={items} selectedMonth={selectedMonth} />
      </Layout>
  )
}

export default MainPage