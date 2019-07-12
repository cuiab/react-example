import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    name: '',
    job: '',
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = () => {
    this.props.dataAdd(this.state)
  }

  render() {
    return (
      <form>
        <input
          placeholder='name'
          name='name'
          value={this.state.name}
          onChange={this.handleChange} />
        <input
          placeholder='job'
          name='job'
          value={this.state.job}
          onChange={this.handleChange} />
        <button
          type='button'
          onClick={this.handleSubmit}>提交</button>
      </form>
    )
  }
}

export default Form