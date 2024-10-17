import React from 'react';
import './Chatbox.css';
import Stories from '../../Components/Stories/Stories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import CurrentUser from '../../FackApis/CurrentData'; 

export default function Chatbox() {
  const user = CurrentUser[0]; 

  return (
    <>
      <Stories />
      <div className="chat-box">
        <div className="chat-box-top">
          <img src={user.ProfieImage} alt="Profile" />
          <div className="user-name">
            <h3>{user.name}</h3>
            <h4>{user.username}</h4> 
          </div>
        </div>
        <div className="chat-box-bottom">
          <form action='#'>
            <input type='text' placeholder='Write Something' />
            <button type='submit' className='btn btn-primary'>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>

            <label type='submit' className='btn btn-primary' htmlFor='CFile'>
              <FontAwesomeIcon icon={faFileAlt} />
              <input type='file' id='CFile' />
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
