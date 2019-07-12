import React, { Component } from 'react'
import CURD from './views/CURD'
import List from './views/List'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Hello, React!</h1>
        {/* <CURD /> */}
        <List />
      </div>
    )
  }
}

export default App