import React from 'react';
import './userprofile.css';
import CurrentUserData from '../../FackApis/CurrentData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeed, faLink, faMessage } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function UserProfile() {
  const user = CurrentUserData[0];

  return (
    <div className="userProfile">
      <div className="cover-photos">
        <img src={user.CoverPhoto} alt="Cover" />
      </div>

      
      <div className="profile-info">
        <img src={user.ProfieImage} alt="Profile" />
        
        <div className="user-name">
          <h3>{user.name}</h3>
          <h4>{user.profession}</h4> 
        </div>

        <div className="profile-button">
          <Link to='/chatbox/id'>
            <button className='btn btn-primary'>
              <FontAwesomeIcon icon={faMessage} /> Message
            </button>
          </Link>

          <button className='btn btn-primary'>
            <FontAwesomeIcon icon={faFeed} /> Follow Me
          </button>

          <button className='btn'>
            <FontAwesomeIcon icon={faLink} /> 
          </button>
        </div>

        
        <p className='bio'>
          {user.bio || 'The only limit is your mind.'} 
        </p>
      </div>
    </div>
  );
}
