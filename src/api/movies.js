// api
import { get } from './api-movies'

// api key
import { key } from './api-movies'

export default {
  apiGetMovies: page => {
    console.log(page)
    return get(`3/movie/popular?api_key=${key}&page=${page}`)
  },
}
