// react
import React, {Component} from 'react'
// import PropTypes from 'prop-types'
//
//redux
// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'

// semantic-ui
// import {} from 'semantic-ui-react'

// hoc's
import Layout from '../../HOC/Layout/Layout'

// styles
import './Main.css'

class Main extends Component {
  state = {}

  render() {
    return (
      <Layout>
        <div className="main-wrapper">
          <section>Search Bar</section>
          <section>Films Bar</section>
        </div>
      </Layout>
    )
  }
}

Main.propTypes = {}

export default Main
