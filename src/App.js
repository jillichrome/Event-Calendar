import React from 'react';
import VolCalendar from './components/calendar/calendar';
import Form from './components/calendar/form';

function App() {
  return (
    <div className="App">
      <h2 className='blue-grey-text text-darken-1 center-align'>Volunteer Calendar</h2>
      <div className='section'>
        <VolCalendar />
      </div>
      <div className='section'>
        <h6 className='blue-grey-text text-darken-1 center-align'>Add An Event</h6>
        <Form />
      </div>
    </div>
  );
}

export default App;
