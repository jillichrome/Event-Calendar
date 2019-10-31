import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import VolCalendar from './components/calendar/calendar';
import NavBar from './components/navbar';
import Form from './components/calendar/form';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={VolCalendar} />
          <Route path='/add' component={Form} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
