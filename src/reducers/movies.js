// Redux
import {handleActions} from 'redux-actions'

// Actions
import actions from '../actions/movies'

export const initialState = {
  isFetching: false,
  error: '',
  items: [],
}

export default handleActions(
  {
    [actions.movies.request]: state => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.movies.success]: (
      state,
      {payload}
    ) => ({
      ...state,
      isFetching: false,
      items: payload.items,
    }),

    [actions.movies.error]: (
      state,
      {payload}
    ) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),
  },
  initialState
)
