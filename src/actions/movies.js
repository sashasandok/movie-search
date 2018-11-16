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

// export const getMovies = ({force = false}) => async (dispatch, getState) => {
export const getMovies = (force = false) => async (dispatch, getState) => {
  const { movies } = getState()
  if (!!movies.items.length && !force) return
  console.log('movies.length/f', movies.length, force)
  
  dispatch(actions.movies.request())
  try {
    const page = movies.page + 1
    const result = await api.apiGetMovies(page)
    const items = result.results.map(mapper)
    dispatch(
      actions.movies.success({
        items: [...movies.items, ...items],
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
