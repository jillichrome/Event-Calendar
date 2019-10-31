import React from 'react';
import { NavLink } from 'react-router-dom';
import M from 'materialize-css';

class Links extends React.Component {
  componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {coverTrigger: false});
    };

  render() {
    return (
      <div>
        <a className='dropdown-trigger btn' data-target='dropdown1'>Actions<i className="material-icons right">arrow_drop_down</i></a>
        <ul id='dropdown1' className='dropdown-content'>
          <li><NavLink to='/add'>Add Event</NavLink></li>
        </ul>
      </div>
    )
  }
};

export default Links;
