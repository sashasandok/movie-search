// react
import React, {Component} from 'react'
import PropTypes from 'prop-types'

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

// lodash
import {slice} from 'lodash'

class Main extends Component {
  state = {
    limit: 6,
  }

  componentDidMount() {
    this.props.getMovies()
  }

  onInputChange = evt => {
    this.props.filterMovies(evt.target.value)
  }

  onLoadMoreMovies = () => {
    this.setState({
      limit: this.state.limit + 6,
    })
  }

  render() {
    const {movies, searchResult} = this.props
    console.log(searchResult)
    const data = slice(
      movies,
      0,
      this.state.limit
    )
    console.log(data)
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
              {data
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
                      <Image
                        src={imageUrl(item.url)}
                        color="teal"
                      />
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
            <div>
              <button
                onClick={this.onLoadMoreMovies}
                className="load-btn">
                Load More
              </button>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies.items,
  searchResult: state.movies.result,
})

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
