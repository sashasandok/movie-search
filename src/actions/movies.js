// babel
import 'babel-polyfill'

// redux
import {createActions} from 'redux-actions'

// mappers
import mapper from '../mappers/movies'

// api
import api from '../api/movies'

const actions = createActions({
  movies: {
    request: x => x,
    success: x => x,
    error: x => x,
    filter: {
      request: x => x,
      success: x => x,
      error: x => x,
    },
  },
})

export default actions

export const getMovies = () => async dispatch => {
  dispatch(actions.movies.request())

  try {
    const movies = await api.getMovies()
    const items = movies.results.map(mapper)

    dispatch(
      actions.movies.success({
        items,
      })
    )
  } catch (e) {
    dispatch(actions.movies.error({error: e}))
    console.log(e)
  }
}

export const filterMovies = value => async dispatch => {
  dispatch(actions.movies.filter.request())
  try {
    dispatch(
      actions.movies.filter.success({
        result: value,
      })
    )
  } catch (e) {
    dispatch(
      actions.movies.filter.error({error: e})
    )
    console.log(e)
  }
}
