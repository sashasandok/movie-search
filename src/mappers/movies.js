import moment from 'moment'

export default movie => {
  return {
    id: movie.id,
    url: movie.poster_path,
    userId: movie.userId,
    title: movie.title,
    overview: movie.overview,
    popularity: movie.popularity,
    releaseDate: moment(
      movie.release_date
    ).format('DD/MM/YYYY'),
  }
}
