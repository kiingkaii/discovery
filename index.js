import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import FirstPage from './views/first-page'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={FirstPage} exact path="/first-page" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
