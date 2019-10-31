import React from 'react';
import { Link } from 'react-router-dom';
import Links from './links';


const NavBar = () => {
  return (
    <nav className='nav-extended'>
      <div className='nav-wrapper grey darken-3'>
        <div className='container'>
          <Link to='/' className='brand-logo'><img width='30' height='30' src='favicon.png' alt='' />Scheduler</Link>
            <ul className='right hide-on-med-and-down'>
              <Links />
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
