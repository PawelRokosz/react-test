import React, { Component } from 'react';

class Event extends Component {
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
    return (
      <div id="event" className="event q4 past" draggable="true"
        onDrag={() => this.handleDrag()}
        onDragStart={(e) => this.handleDragStart(e)}
        onDragEnd={(e) => this.handleDragEnd(e)}
        >
        <p className="hours">{this.props.start} - {this.props.end}</p>
        <p className="description">{this.props.description}</p>
        <span className="icon"></span>
      </div>
    )
  }
}

export default Event;
