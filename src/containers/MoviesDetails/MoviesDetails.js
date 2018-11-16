import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// selectors
import { getMovieList, getMovieById } from '../../selectors/movies'

// semantic-ui
import { Card, Image, Divider } from 'semantic-ui-react'

// image api
import { imageUrl } from '../../api/api-movies'

// Actions
import { getMovies } from '../../actions/movies'

// styles
import './MoviesDetails.css'

class Movie extends Component {
  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    const { movie } = this.props
    console.log(movie)
    return (
      <div className="details-block">
        <header className="details-header">
          <h1>{movie.title}</h1>
        </header>
        <div className="movie">
          <Card style={{ minHeight: 300, width: 550 }}>
            <Image src={imageUrl(movie.backdropPath)} color="teal" />
            <Card.Content>
              <Card.Header>{movie.title}</Card.Header>
              <Card.Meta as="h2">
                <span className="date">{movie.releaseDate}</span>
              </Card.Meta>
              <Divider />
              <Card.Description
                style={{
                  textAlign: 'justify',
                  fontSize: 16,
                }}>
                {movie.overview}
              </Card.Description>
              <Divider />
              <h3>popularity: {movie.popularity}</h3>
              <h3>language: {movie.originalLanguage}</h3>
            </Card.Content>
          </Card>
        </div>
        <div className="btn-block">
          <Link to="/">
            <button className="load-btn" onClick={this.onLoadMoreMovies}>
              To Main Page
            </button>
          </Link>
        </div>
        <footer className="details-footer">&copy; Alex_Sandok 2018</footer>
      </div>
    )
  }
}

Movie.propTypes = {
  movie: PropTypes.instanceOf(Object),
}

const mapStateToProps = (state, props) => {
  const movieId = +props.match.params.id
  return {
    movies: getMovieList(state),
    movie: getMovieById(movieId)(state) || {},
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies,
    },
    dispatch
  )

Movie.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movies: PropTypes.instanceOf(Array),
  movie: PropTypes.instanceOf(Object),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie)
