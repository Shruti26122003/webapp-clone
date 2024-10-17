import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell, faEnvelope, faHome, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import CurrentUser from '../../FackApis/CurrentData';
import './Nav.css';
import DarkMode from '../DarkMode/DarkMode';

export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <Link to='/'>
            <h3 className='logo'>ArtOfLiving</h3>
          </Link>
          <Link to='/'>
            <FontAwesomeIcon icon={faHome} />
          </Link>

          <Link to='/profile/id'>
            <FontAwesomeIcon icon={faUser} />
          </Link>

          <div className="Nav-Searchbar">
            <FontAwesomeIcon icon={faSearch} />
            <input type='search' />
          </div>
        </div>

        <div className="nav-right"> {/* Move nav-right out of nav-left */}
          <Link to='/chatbox/id'>
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>

          <Link to='/'>
            <FontAwesomeIcon icon={faBell} />
          </Link>

          <DarkMode />
          
          <Link to='/'>
            <FontAwesomeIcon icon={faBars} />
          </Link>

          <div className="user">
            <img src={CurrentUser.map(user => user.ProfieImage)} alt="Profile" />
            <h4>Harry</h4>
          </div>
        </div>
      </div>
    </nav>
  );
}
