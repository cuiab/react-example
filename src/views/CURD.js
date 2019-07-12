import React, { Component } from 'react'
import Table from '../components/Table'
import Form from '../components/Form'

class CURD extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    dataSource: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      }
    ]
  }

  dataRemove = (index) => {
    const { dataSource } = this.state
    this.setState({
      dataSource: dataSource.filter((v, i) => {
        return i !== index
      })
    })
  }

  dataAdd = (data) => {
    this.setState({
      dataSource: [...this.state.dataSource, data]
    })
  }

  render() {
    return (
      <div className='curd'>
        <Form dataAdd={this.dataAdd}></Form>
        <Table dataSource={this.state.dataSource} dataRemove={this.dataRemove} />
      </div>
    )
  }
}

export default CURD
