import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

// reducers
import movies from './movies'

export default combineReducers({
  routing: routerReducer,
  movies,
})
