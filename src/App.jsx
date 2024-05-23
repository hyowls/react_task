import React from 'react'
import './App.css'
import Router from './shared/Router'
import GlobalStyle from './components/GlobalStyled'
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  )
}

export default App
