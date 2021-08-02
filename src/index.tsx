import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'theme/global'
import theme from 'theme/theme'
import App from './App'

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history} >
    <ThemeProvider theme={theme}>
        <GlobalStyles theme={{}} />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)