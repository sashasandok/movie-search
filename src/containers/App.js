import React, {Component} from 'react'
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

// components
import MoviesDetails from '../containers/MoviesDetails/MoviesDetails'
import NoFound from '../components/NoFound/NoFound'

// containers
import MoviesList from '../containers/MoviesList/MoviesList'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              component={MoviesList}
            />
            <Route
              exact
              path="/movie/:id"
              component={MoviesDetails}
            />
            <Route component={NoFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
