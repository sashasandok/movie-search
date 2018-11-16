// babel
import 'babel-polyfill'

// redux
import { createActions } from 'redux-actions'

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
      success: x => x,
    },
  },
})

export default actions

export const getMovies = () => async (dispatch, getState) => {
  dispatch(actions.movies.request())

  try {
    const { movies } = getState()
    const page = movies.page + 1

    const result = await api.apiGetMovies(page)
    const items = result.results.map(mapper)
    dispatch(
      actions.movies.success({
        items,
        page,
      })
    )
  } catch (e) {
    dispatch(actions.movies.error({ error: e }))
    console.log(e)
  }
}

export const filterMovies = value => async dispatch => {
  dispatch(
    actions.movies.filter.success({
      result: value,
    })
  )
}
