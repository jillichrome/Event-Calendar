import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import events from './events';


const localizer = momentLocalizer(moment);
const allViews = Object.keys(Views).map(k => Views[k]);

export default class VolCalendar extends React.Component {
  state = {
    events: events
  };

  handleSelect({ start, end }) {
    const title = window.prompt('New Event Name')
    if(title) {
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
    }
  }

  render() {
    return(
      <div className='calendar-container' style={{height : 700}}>
        <Calendar
          selectable
          localizer={localizer}
          events={events}
          views={allViews}
          startAccessor='start'
          endAccessor='end'
          onSelectEvent={event => alert(event.title, event.start)}
          onSelectSlot={this.handleSelect}
        />
      </div>
    )
  }
}
