import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

//redux
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

// semantic-ui
import {Card, Image} from 'semantic-ui-react'

// image api
import {imageUrl} from '../../api/api-movies'

// hoc
import Layout from '../../HOC/Layout/Layout'

// Actions
import {getMovies} from '../../actions/movies'

// styles
import './Movie.css'

class Movie extends Component {
  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    const {movie} = this.props
    return (
      <Layout>
        <div className="movie">
          <Card
            style={{minHeight: 300, width: 550}}>
            <Image
              src={imageUrl(movie.url)}
              color="teal"
            />
            <Card.Content>
              <Card.Header>
                {movie.title}
              </Card.Header>
              <Card.Meta>
                <span className="date">
                  {movie.releaseDate}
                </span>
              </Card.Meta>
              <Card.Description textAlign="left">
                {movie.overview}
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
        <div className="btn-block">
          <Link to="/">
            <button
              className="load-btn"
              onClick={this.onLoadMoreMovies}>
              To Main Page
            </button>
          </Link>
        </div>
      </Layout>
    )
  }
}

Movie.propTypes = {
  movie: PropTypes.instanceOf(Object),
}

const mapStateToProps = (state, props) => {
  const movieId = +props.match.params.id
  return {
    movies: state.movies.items,
    movie:
      state.movies.items.find(
        i => i.id === movieId
      ) || {},
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
