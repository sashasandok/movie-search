// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// Selectors
import { getMovieList } from '../../selectors/movies'

// semantic-ui
import { Input } from 'semantic-ui-react'

// hoc's
import Layout from '../../HOC/Layout/Layout'

// components
import Movie from '../../components/Movie/Movie'

// Actions
import { getMovies, filterMovies } from '../../actions/movies'

// styles
import './MoviesList.css'

class MoviesList extends Component {
  componentDidMount() {
    this.props.getMovies()
  }

  onInputChange = evt => {
    this.props.filterMovies(evt.target.value)
  }

  onLoadMoreMovies = () => {
    this.props.getMovies()
  }

  render() {
    const { movies, searchResult } = this.props
    return (
      <Layout>
        <div className="main-wrapper">
          <section className="search-block">
            <Input size="mini" icon="search" onChange={this.onInputChange} />
          </section>
          <section className="movie-block">
            <Movie searchResult={searchResult} movies={movies} />
            <div>
              <button className="load-btn" onClick={this.onLoadMoreMovies}>
                Load More
              </button>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: getMovieList(state),
    searchResult: state.movies.result,
    page: state.movies.page,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies,
      filterMovies,
    },
    dispatch
  )

MoviesList.propTypes = {
  getMovies: PropTypes.func.isRequired,
  filterMovies: PropTypes.func.isRequired,
  movies: PropTypes.instanceOf(Array),
  searchResult: PropTypes.string.isRequired,
  page: PropTypes.number || null,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesList)
