// Redux
import {handleActions} from 'redux-actions'

// Actions
import actions from '../actions/movies'

export const initialState = {
  isFetching: false,
  error: '',
  items: [],
  result: '',
  page: 1,
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

    [actions.movies.filter.request]: state => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.movies.filter.success]: (
      state,
      {payload}
    ) => ({
      ...state,
      isFetching: false,
      result: payload.result,
    }),

    [actions.movies.filter.error]: (
      state,
      {payload}
    ) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),

    [actions.movies.page.request]: state => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.movies.page.success]: (
      state,
      {payload}
    ) => ({
      ...state,
      isFetching: false,
      page: payload.page,
    }),

    [actions.movies.page.error]: (
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
