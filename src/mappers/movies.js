import moment from 'moment'

export default movie => {
  return {
    voteCount: movie.vote_count,
    id: movie.id,
    video: movie.video,
    voteAverage: movie.vote_average,
    title: movie.title,
    popularity: movie.popularity,
    posterPath: movie.poster_path,
    originalLanguage: movie.original_language,
    originalTitle: movie.original_title,
    genreIds: movie.genre_ids,
    backdropPath: movie.backdrop_path,
    adult: movie.adult,
    overview: movie.overview,
    releaseDate: moment(movie.release_date).format('DD/MM/YYYY'),
  }
}
