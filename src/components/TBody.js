import React, { Component } from 'react';

import calendarData from './data/calendarData.json';

import CustomRow from './CustomRow';
import Event from './Event';

class TBody extends Component {

  state = {
    data: '',
    events: []
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

  componentWillMount() {
    this.setState({
      events: calendarData
    })
  }

  render() {
    let events = this.state.events;

    let mappedEvents = events.map(event => {
      return <Event key={event.id} description={`${event.patient.salutation} ${event.patient.firstname}`} sendData={(data) => this.handleSendData(data)}/>
    });

    const workingHoursDuringDay = 13;
    let customRows = [];

    let hour = 8;
    let timeFromHour;

    for (var i = 0; i < workingHoursDuringDay; i++) {

      if (hour > 9) {
        timeFromHour = `${hour}:00`;
      } else {
        timeFromHour = `0${hour}:00`;
      }

      customRows.push(<CustomRow key={i} hour={timeFromHour} event={mappedEvents[i]}/>);

      hour++;
    }

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

// <tr>
//   <td className="hour">08:00</td>
//   <td >
//     <Event sendData={(data) => this.handleSendData(data)}/>
//   </td>
//   <td>
//   </td>
//   <td className="active"></td>
//   <td ></td>
//   <td ></td>
//   <td ></td>
//   <td ></td>
// </tr>
// <tr>
//   <td className="hour">09:00</td>
//   <td></td>
//   <td></td>
//   <td className="active"></td>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td className="hour">10:00</td>
//   <td></td>
//   <td></td>
//   <td className="active"></td>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td className="hour">11:00</td>
//   <td></td>
//   <td></td>
//   <td className="active"></td>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td className="hour">12:00</td>
//   <td></td>
//   <td></td>
//   <td className="active"></td>
//   <td></td>
//   <td ></td>
//   <td ></td>
//   <td ></td>
// </tr>
// <tr>
//   <td className="hour">13:00</td>
//   <td></td>
//   <td></td>
//   <td className="active"></td>
//   <td ></td>
//   <td ></td>
//   <td ></td>
//   <td ></td>
// </tr>
// <tr>
//   <td className="hour">14:00</td>
//   <td></td>
//   <td></td>
//   <td className="active"></td>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td className="hour">15:00</td>
//   <td></td>
//   <td></td>
//   <td className="active"></td>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td className="hour">16:00</td>
//   <td></td>
//   <td></td>
//   <td className="active"></td>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td className="hour">17:00</td>
//   <td></td>
//   <td></td>
//   <td className="active"></td>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td className="hour">18:00</td>
//   <td></td>
//   <td></td>
//   <td className="active"></td>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td className="hour">19:00</td>
//   <td></td>
//   <td></td>
//   <td className="active"></td>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td></td>
// </tr>
// <tr>
//   <td className="hour">20:00</td>
//   <td></td>
//   <td></td>
//   <td className="active"></td>
//   <td></td>
//   <td></td>
//   <td></td>
//   <td></td>
// </tr>
