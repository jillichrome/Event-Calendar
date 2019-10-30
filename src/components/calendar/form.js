import React from 'react';
import Materialize from 'materialize-css';
import './form.css';

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      startDate: new Date(),
      endDate: new Date()
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      title: event.target.title,
      startDate: event.target.startDate,
      endDate: event.target.endDate
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      title: '',
      startDate: '',
      endDate: ''
    })
  };

  render() {
    return(
      <div className='form-container col s12'>
        <form action=''>
          <div className='input-field'>
            <input id='title' type='text' onChange={this.handleChange} />
            <label class='active' for='title'>Title:</label>
          </div>
          <div className='row'>
            <div className='input-field col s6'>
              <input id='start' type='text' class='datepicker' onChange={this.handleChange} />
              <label for='start'>StartDate:</label>
            </div>
            <div className='input-field col s6'>
              <input id='end' type='text' class='datepicker' onChange={this.handleChange} />
              <label for='end'>EndDate:</label>
            </div>
          </div>
          <div className='input-field'>
            <button class='btn' onSubmit={this.handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
