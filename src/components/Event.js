import React from 'react';
import data from './data/calendarData.json';

class Event extends React.Component {
  handleDrag() {
    console.log('drag');
  }

  handleDragStart(e) {
    e.dataTransfer.setData('text/plain', null);
    e.target.classList.add('drag');
    this.props.sendData(e.target);
  }

  handleDragEnd(e) {
    e.target.classList.remove('drag');
  }

  render() {
    const myData = data[0];
    return (
      <div id="event" className="event q4 past" draggable="true"
        onDrag={() => this.handleDrag()}
        onDragStart={(e) => this.handleDragStart(e)}
        onDragEnd={(e) => this.handleDragEnd(e)}
        >
        <p className="hours">08:00 - 09:00</p>
        <p className="description">{`${myData.patient.salutation} ${myData.patient.firstname}`}</p>
        <span className="icon"></span>
      </div>
    )
  }
}

export default Event;
