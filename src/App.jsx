import React from 'react'
import './App.css'
import Router from './shared/Router'
import GlobalStyle from './components/GlobalStyled'
import { ContextProvider } from './context/Context'
const App = () => {
  return (
    <ContextProvider>
      <GlobalStyle />
      <Router />
    </ContextProvider>
  )
}

export default App
