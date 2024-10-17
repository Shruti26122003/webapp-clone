import React from 'react'
import UserProfile from '../../Components/UserProfile/UserProfile'
import AddPost from '../../Components/AddPost/AddPost'
import Feed from '../../Components/Feed/Feeds'

export default function Profile() {
  return (
    <div>
      <UserProfile />
      <AddPost />
      <Feed />
    </div>
  )
}
