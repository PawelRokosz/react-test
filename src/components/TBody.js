import React from 'react';

import Event from './Event';

class TBody extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ''
    }
  }

  handleDragEnter(e) {
    if (e.target.tagName === 'TD' && e.target.innerHTML === '') {
      e.target.style.background = "purple";
    }
  }

  handleDragLeave(e) {
    if (e.target.tagName === 'TD' && e.target.innerHTML === '') {
      e.target.style.background = "";
    }
  }

  handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  handleSendData(data) {
    this.setState({
      data: data
    })
  }

  handleDrop(e) {
    console.log(e.target);
    console.log(this.state.data);
    e.target.appendChild(this.state.data);
  }

  handleEventDragEnd(e) {
    console.log(e);
  }


  render() {

    return (
      <tbody
        onDragEnter={(e) => this.handleDragEnter(e)}
        onDragLeave={(e) => this.handleDragLeave(e)}
        onDragOver={(e) => this.handleDragOver(e)}
        onDrop={(e) => this.handleDrop(e)}
        >
        <tr>
          <td className="hour">08:00</td>
          <td >
            <Event eventDragEnd={(e) => this.handleEventDragEnd(e)} sendData={(data) => this.handleSendData(data)}/>
          </td>
          <td></td>
          <td className="active"></td>
          <td ></td>
          <td ></td>
          <td ></td>
          <td ></td>
        </tr>
        <tr>
          <td className="hour">09:00</td>
          <td></td>
          <td></td>
          <td className="active"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="hour">10:00</td>
          <td></td>
          <td></td>
          <td className="active"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="hour">11:00</td>
          <td></td>
          <td></td>
          <td className="active"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="hour">12:00</td>
          <td></td>
          <td></td>
          <td className="active"></td>
          <td></td>
          <td ></td>
          <td ></td>
          <td ></td>
        </tr>
        <tr>
          <td className="hour">13:00</td>
          <td></td>
          <td></td>
          <td className="active"></td>
          <td ></td>
          <td ></td>
          <td ></td>
          <td ></td>
        </tr>
        <tr>
          <td className="hour">14:00</td>
          <td></td>
          <td></td>
          <td className="active"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="hour">15:00</td>
          <td></td>
          <td></td>
          <td className="active"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="hour">16:00</td>
          <td></td>
          <td></td>
          <td className="active"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="hour">17:00</td>
          <td></td>
          <td></td>
          <td className="active"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="hour">18:00</td>
          <td></td>
          <td></td>
          <td className="active"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="hour">19:00</td>
          <td></td>
          <td></td>
          <td className="active"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="hour">20:00</td>
          <td></td>
          <td></td>
          <td className="active"></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    )
  }
}

export default TBody;
