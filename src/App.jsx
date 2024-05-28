import React from 'react'
import './App.css'
import Router from './shared/Router'
import GlobalStyle from './components/GlobalStyled'
import { Provider } from 'react-redux'
import store from './redux/config/Store'

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router />
    </Provider>
  )
}

export default App
