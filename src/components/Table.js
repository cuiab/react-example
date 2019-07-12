import React, { Component } from 'react'

const TableCaption = () => {
  return (
    <caption>
      <button>添加</button>
      <button>测试</button>
    </caption>
  )
}

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Actions</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {
  const trs = props.data.map((v, i) => {
    return (
        <tr key={i} className='li'>
        <td>{v.name}</td>
        <td>{v.job}</td>
        <td>
          <button onClick={() => props.remove(i)}>Delete</button>
        </td>
      </tr>
    )
  })
  return (
    <tbody>{trs}</tbody>
  )
}

class Table extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dataSource, dataRemove } = this.props
    return (
      <table className='table'>
        {/* <TableCaption /> */}
        <TableHeader />
        <TableBody data={dataSource} remove={dataRemove} />
      </table>
    )
  }
}

export default Table