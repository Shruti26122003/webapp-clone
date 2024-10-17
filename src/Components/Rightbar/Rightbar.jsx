import React from 'react';
import './Rightbar.css';
import Messages from '../Messages/Messages';
import Firend from '../FirendReqe/Firend';

export default function Rightbar() {
  return (
    <div className="rightBar">
      <div className="rightbar-container">
        <div className="Message">
          <Messages />
        </div>
        <div className="Friend-Request">
          <Firend />
        </div>
      </div>
    </div>
  );
}
