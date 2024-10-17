import React from 'react'
import './Leftbar.css'
import { Link } from 'react-router-dom'
import CurrentUser from '../../FackApis/CurrentData'
import Firend from '../../assets/icons/1.png'
import Groups from '../../assets/icons/2.png'
import Market from '../../assets/icons/3.png'
import Watch from '../../assets/icons/4.png'
import gallery from '../../assets/icons/5.png'
import videos from '../../assets/icons/6.png'
import message from '../../assets/icons/7.png'


export default function Leftbar() {
  return (
    <div className="leftBar">
      <div className="left-container">
        <div className="menu">
          <Link to='/profile/id'>
          <div className="user">
            <img src={CurrentUser.map(user=>(user.ProfieImage))} alt="" />
            <h4> Harry </h4>
          </div>
          </Link>

          <Link to='/'>
            <div className="item">
              <img src= {Firend} alt='' />
              <h4> Friends </h4>
            </div>
          </Link>

          <Link to='/'>
            <div className="item">
              <img src= {Groups} alt='' />
              <h4> Groups </h4>
            </div>
          </Link>

          <Link to='/'>
            <div className="item">
              <img src= {Market} alt='' />
              <h4> Market </h4>
            </div>
          </Link>

          <Link to='/'>
            <div className="item">
              <img src= {Watch} alt='' />
              <h4> Watch </h4>
            </div>
          </Link>

          

        <hr />
        <div className="menu">
        <div className="menu">
            <h4 className='others'> Your Shortcuts</h4>
          </div>

          <Link to='/'>
            <div className="item">
              <img src= {gallery} alt='' />
              <h4> Gallery </h4>
            </div>
          </Link>

          <Link to='/'>
            <div className="item">
              <img src= {videos} alt='' />
              <h4> Videos </h4>
            </div>
          </Link>

          <Link to='/chatbox/id'>
            <div className="item">
              <img src= {message} alt='' />
              <h4> Message </h4>
            </div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}
