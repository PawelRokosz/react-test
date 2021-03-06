import React, { Component } from 'react';

import calendarData from './data/calendarData.json';

import Event from './Event';

class Td extends Component {
  state = {
    events: []
  }

  handleSendData(data) {
    this.props.sendData(data)
  }

  componentWillMount() {
    this.setState({
      events: calendarData
    })
  }

  render() {

    let events = this.state.events;
    let currentEvent;

    events.map((event) => {
      if (event.start_time === this.props.hour && event.day === this.props.day) {

         currentEvent =
              <Event
                key={event.id}
                description={`${event.patient.salutation} ${event.patient.firstname}`}
                start={event.start_time}
                end={event.end_time}
                day={event.day}
                sendData={(data) => this.handleSendData(data)}
              />
      }
      return currentEvent;
    })

    return (
      <td day={this.props.day} hour={this.props.hour}>{currentEvent}</td>
    )
  }
}

export default Td;
