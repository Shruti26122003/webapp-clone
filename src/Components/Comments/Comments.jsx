import React from 'react'
import './Comments.css'
import CommentData from '../../FackApis/CommentData'
import CurrentUserData from '../../FackApis/CurrentData'
import { Link } from 'react-router-dom'

export default function Comments() {
  return (
    <div className="comments">
      <div className="writebox">
        <form action='#'>
          <div className="user">
            <img src={CurrentUserData.map(user=>(user.ProfieImage))}
            alt='' />
            <input type='text' placeholder='Write a Comment' />
            <button type = 'submit' className='btn btn-primary'> Send </button>
          </div>
        </form>
      </div>
      {
        CommentData.map(Comment=>(
          <Link to='/profile/id'>
            <div className='user' key={Comment.id}>
              <img src={Comment.commentProfile} alt="" />
              <div>
                <h5>{Comment.name}</h5>
                <p>{Comment.CommeText}</p>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}
