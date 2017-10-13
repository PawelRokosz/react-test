import React, { Component } from 'react';

class CustomRow extends Component {
  render() {
    console.log(this.props.event);
    return (
      <tr>
        <td className="hour">{this.props.hour}</td>
        <td>{this.props.event}</td>
        <td></td>
        <td className="active"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    )
  }
}

export default CustomRow;
