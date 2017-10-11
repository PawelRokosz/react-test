import React from 'react';

class Event extends React.Component {
  render() {
    return (
      <div className="event q4 past" draggable="true">
        <p className="hours">08:00 - 09:00</p>
        <p className="description">Meier</p>
        <span className="icon"></span>
      </div>
    )
  }
}

export default Event;
