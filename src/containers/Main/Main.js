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
import {getMovies} from '../../actions/movies'

// styles
import './Main.css'

// image api
import {imageUrl} from '../../api/api-movies'

class Main extends Component {
  state = {}

  componentDidMount() {
    this.props.getMovies()
  }

  render() {
    const {movies} = this.props

    return (
      <Layout>
        <div className="main-wrapper">
          <section className="search-block">
            <Input size="mini" icon="search" />
          </section>
          <section className="movie-block">
            <Card.Group itemsPerRow={3}>
              {movies.map(item => {
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
                      <Card.Description>
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

const mapStateToProps = state => ({
  movies: state.movies.items,
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getMovies,
    },
    dispatch
  )

Main.propTypes = {
  getMovies: PropTypes.func.isRequired,
  movies: PropTypes.instanceOf(Array),
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
