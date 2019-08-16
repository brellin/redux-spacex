import React from 'react'
import { connect } from 'react-redux'
import { getRocket } from './actions'

import Rocket from './componenents/Rocket'
import './App.scss'

function App(props) {

  if (props.gotten) return <div>
    <Rocket />
  </div>

  if (props.getting) return (

    <div className="App">
      <header className="App-header">
        Loading...
      </header>
    </div>

  )

  else return (

    <div className="App">
      <header className="App-header">
        <button onClick={props.getRocket}>Get the rocket!</button>
      </header>
    </div>

  )

}

const mapStateToProps = state => {
  return {
    gotten: state.gotten,
    getting: state.getting
  }
}

export default connect(mapStateToProps, { getRocket })(App)
