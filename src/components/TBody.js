import React, { Component } from 'react';

import CustomRow from './CustomRow';

class TBody extends Component {

  state = {
    data: ''
  }

  handleDragEnter(e) {
    if (e.target.tagName === 'TD' && e.target.innerHTML === '') {
      e.target.classList.add('over');
    }
  }

  handleDragLeave(e) {
    if (e.target.tagName === 'TD' && e.target.innerHTML === '') {
      e.target.classList.remove('over');
    }
  }

  handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  handleSendData(data) {
    this.setState({ data })
  }

  handleDrop(e) {
    if (e.target.tagName === 'TD' && e.target.innerHTML === '') {
      e.target.appendChild(this.state.data);
      e.target.classList.remove('over');
    }
  }

  render() {

    let hours = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'];
    let customRows = hours.map(x => {
      return <CustomRow key={x} hour={x} sendData={(data) => this.handleSendData(data)}/>
    })

    return (
      <tbody
        onDragEnter={(e) => this.handleDragEnter(e)}
        onDragLeave={(e) => this.handleDragLeave(e)}
        onDragOver={(e) => this.handleDragOver(e)}
        onDrop={(e) => this.handleDrop(e)}
        >

        {customRows}

      </tbody>
    )
  }
}

export default TBody;
