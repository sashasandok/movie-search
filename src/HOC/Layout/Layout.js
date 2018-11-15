import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './Layout.css'

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
        <header className="layout-header">
          <h1>Movie List</h1>
        </header>
        <section className="layout-content">
          {this.props.children}
        </section>
        <footer className="layout-footer">
          &copy; Alex_Sandok 2018
        </footer>
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
