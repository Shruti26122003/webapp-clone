import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='Signup'>
      <div className='card'>
        <div className='left'>
          <h2>-<br />ArtofLiving<br />-</h2>
          <p>
            The Art of Living's official Instagram account offers insights into their global initiatives, events, and teachings. Follow them to stay updated on programs that promote well-being and spiritual growth.
          </p>
          <span> have an account?</span>
          <Link to='/login'>
          <button className='btn btn-primary'>Login</button>
          </Link>
        </div>

        <form className='right'>
          <input type='text' required placeholder='Username' />
          <input type='email' required placeholder='email' />
          <input type='password' required placeholder='Password' />
          <button className='btn' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}
