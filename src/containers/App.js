import React, { Component } from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

// components
import NoFound from '../components/NoFound/NoFound'

// containers
import Main from '../containers/Main/Main'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route component={NoFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
