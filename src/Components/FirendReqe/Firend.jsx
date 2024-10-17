import React from 'react';
import './Firend.css';
import { Link } from 'react-router-dom';
import FirendReqData from '../../FackApis/FirendReqData';

export default function Firend() {
  return (
    <div className="Firend-Request">
      <h4>Friend Request</h4>
      {
        FirendReqData.map((Firend) => (
          <div className="request" key={Firend.id}>
            <Link to={`/profile/${Firend.id}`}>
              <div className="info">
                <div className="user">
                  <img src={Firend.img} alt='' />
                  <h5>{Firend.name}</h5>
                </div>
                <div className="info-name">
                  <p>{Firend.info}</p>
                </div>
              </div>
            </Link>
            <div className="action">
              <button className='btn btn-primary'>Accept</button>
              <button className='btn btn-red'>Delete</button>
            </div>
          </div>
        ))
      }
    </div>
  );
}
