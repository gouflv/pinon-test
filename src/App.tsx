import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/app'
import { theme } from './styles/theme'
import Orders from './views/Order'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <GlobalStyle />
        <Orders />
      </div>
    </ThemeProvider>
  )
}

export default App
