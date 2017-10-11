import React from 'react';
import data from './data/calendarData.json';

class Event extends React.Component {
  handleDragStart(e) {
    e.target.style.opacity = '0.4';
  }

  render() {
    const myData = data[0];
    return (
      <div id="event" className="event q4 past" draggable="true" onDragStart={(e) => this.handleDragStart(e)}>
        <p className="hours">08:00 - 09:00</p>
        <p className="description">{`${myData.patient.salutation} ${myData.patient.firstname}`}</p>
        <span className="icon"></span>
      </div>
    )
  }
}

export default Event;
