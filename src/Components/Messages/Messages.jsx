import React from 'react';
import './Messages.css';
import MessageData from '../../FackApis/MessageData'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 

export default function Messages() {
  return (
    <div className="Message">
      <div className="message-top">
        <h4>Messages</h4>
        <FontAwesomeIcon icon={faEdit} />
      </div>
      <div className="message-search">
        <FontAwesomeIcon icon={faSearch} />
        <input type="search" placeholder="Search Message" />
      </div>
      <div className="border-div">
        {MessageData.map((mess) => (
          <Link to={`/chatbox/${mess.id}`} key={mess.id}>
            <div className="message">
              <div className="user">
                <img src={mess.img} alt="" />
                <div className="green-active"></div>
              </div>
              <div className="message-body">
                <h5>{mess.name}</h5>
                <p>{mess.mText}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
