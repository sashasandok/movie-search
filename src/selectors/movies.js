// Libs
import { createSelector } from 'reselect'

export const getData = ({ movies = {} }) => movies || {}

export const getMovieList = createSelector(getData, data => data.items)

export const getMovieById = id =>
  createSelector(getMovieList, movies => movies.find(i => i.id === id))
