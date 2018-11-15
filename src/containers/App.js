import React, {Component} from 'react'
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

// components
import Movie from '../components/Movie/Movie'
import NoFound from '../components/NoFound/NoFound'

// containers
import Main from '../containers/Main/Main'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={Main}
            />
            <Route
              exact
              path="/movie/:id"
              component={Movie}
            />
            <Route component={NoFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
