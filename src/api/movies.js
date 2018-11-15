// api
import {get} from './api-movies'

export default {
  apiGetMovies: page => {
    console.log(page)
    return get(
      `3/movie/popular?api_key=b5829a9af606f1c112b9231fc5b77557&page=${page}`
    )
  },
}
