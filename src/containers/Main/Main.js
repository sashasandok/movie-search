// react
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

//redux
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

// semantic-ui
import {
  Input,
  Card,
  Image,
} from 'semantic-ui-react'

// hoc's
import Layout from '../../HOC/Layout/Layout'

// Actions
import {
  getMovies,
  filterMovies,
} from '../../actions/movies'

// styles
import './Main.css'

// image api
import {imageUrl} from '../../api/api-movies'

class Main extends Component {
  componentDidMount() {
    this.props.getMovies()
  }

  onInputChange = evt => {
    this.props.filterMovies(evt.target.value)
  }

  render() {
    const {movies, searchResult} = this.props

    return (
      <Layout>
        <div className="main-wrapper">
          <section className="search-block">
            <Input
              size="mini"
              icon="search"
              onChange={this.onInputChange}
            />
          </section>
          <section className="movie-block">
            <Card.Group itemsPerRow={3}>
              {movies
                .filter(i => {
                  const searchStr = `${i.title}`
                  return searchStr
                    .toLowerCase()
                    .includes(searchResult)
                })
                .map(item => {
                  return (
                    <Card
                      centered={true}
                      key={item.id}
                      style={{minHeight: 400}}>
                      <Link
                        to={`/movie/${item.id}`}>
                        <Image
                          src={imageUrl(item.url)}
                          color="teal"
                          style={{
                            cursor: 'pointer',
                          }}
                        />
                      </Link>
                      <Card.Content>
                        <Card.Header>
                          {item.title}
                        </Card.Header>
                        <Card.Meta>
                          <span className="date">
                            {item.releaseDate}
                          </span>
                        </Card.Meta>
                        <Card.Description textAlign="left">
                          {item.overview}
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  )
                })}
            </Card.Group>
          </section>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies.items,
    searchResult: state.movies.result,
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

Main.propTypes = {
  getMovies: PropTypes.func.isRequired,
  filterMovies: PropTypes.func.isRequired,
  movies: PropTypes.instanceOf(Array),
  searchResult: PropTypes.string.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
