import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from 'pages/home-page'
import OtherPage from 'pages/other-page'

function App() {
  return (
    <BrowserRouter basename="/">
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/chat" component={OtherPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App