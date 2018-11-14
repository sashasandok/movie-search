// react
import React, {Component} from 'react'
// import PropTypes from 'prop-types'
//
//redux
// import {connect} from 'react-redux'
// import {bindActionCreators} from 'redux'

// semantic-ui
import {Input} from 'semantic-ui-react'

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
          <section className="search-block">
            <Input size="mini" icon="search" />
          </section>
          <section className="movie-block">
            Film Cards
          </section>
        </div>
      </Layout>
    )
  }
}

Main.propTypes = {}

export default Main

// <Card>
//   <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
//   <Card.Content>
//     <Card.Header>Matthew</Card.Header>
//     <Card.Meta>
//       <span className="date">
//         Joined in 2015
//       </span>
//     </Card.Meta>
//     <Card.Description>
//       Matthew is a musician living in
//       Nashville.
//     </Card.Description>
//   </Card.Content>
//   <Card.Content extra>
//     <Icon name="user" />
//     22 Friends
//   </Card.Content>
// </Card>
