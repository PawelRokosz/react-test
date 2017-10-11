import React from 'react';
import data from './data/calendarData.json';

class Event extends React.Component {
  render() {
    const myData = data[0];
    return (
      <div class="event q4 past" draggable="true">
        <p class="hours">08:00 - 09:00</p>
        <p class="description">{`${myData.patient.salutation} ${myData.patient.firstname}`}</p>
        <span class="icon"></span>
      </div>
    )
  }
}

export default Event;
