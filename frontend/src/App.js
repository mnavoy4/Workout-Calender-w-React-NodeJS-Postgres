import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment)

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <Calendar
          localizer={localizer}
          startAccessor='start'
          endAccessor='end'
          style={{ height: 400, width: 800 }}
          events={[]}
        />
      </div>
    );
  }
  
}

export default App;
