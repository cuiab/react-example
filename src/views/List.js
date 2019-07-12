import React, { Component } from 'react'


class List extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    data: []
  }
  
  componentDidMount() {
    let url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=China&format=json&origin=*'

    fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        this.setState({
          data: res
        })
      })
  }

  render() {
    const { data} = this.state

    const lis = data.map((v, i) => {
      return (
        <li key={i}>{v}</li>
      )
    })

    return (
      <ul>{lis}</ul>
    )
  }
}

export default List
