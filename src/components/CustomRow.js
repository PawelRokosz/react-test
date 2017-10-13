import React, { Component } from 'react';

import Td from './Td'

class CustomRow extends Component {

  handleSendData(data) {
    this.props.sendData(data)
  }

  render() {

    let days = ['06', '07', '08', '09', '10', '11', '12'];
    let tds = days.map(x => {
      return <Td key={x} day={x} hour={this.props.hour} sendData={(data) => this.handleSendData(data)}/>
    })

    return (
      <tr>
        <td className="hour">{this.props.hour}</td>
        {tds}
      </tr>
    )
  }
}

export default CustomRow;
