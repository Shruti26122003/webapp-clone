import React, { useState } from 'react';
import './Feed.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart, faListDots, faShare } from '@fortawesome/free-solid-svg-icons';
import Comments from '../Comments/Comments';

export default function Feed({ fed }) {
  const [openComment, setOpenComment] = useState(false);

  const CommentHandler = () => {
    setOpenComment(!openComment);
  };

  return (
    <div className="feed" key={fed.userid}>
      <div className="top-content">
        <Link to={`/profile/${fed.userid}`}>
          <div className="user">
            <img src={fed.feedProfile} alt={`${fed.name}'s profile`} />
            <h5>{fed.name}</h5>
            <small>1 Minute Ago</small>
          </div>
        </Link>
        <span>
          <FontAwesomeIcon icon={faListDots} />
        </span>
      </div>
      <div className="mid-content">
        <p>{fed.desc}</p>
        <img src={fed.feedImage} alt={`${fed.name}'s post`} />
      </div>
      <div className="bottom-content">
        <div className="action-item">
          <span>
            <FontAwesomeIcon icon={faHeart} /> 15 Likes
          </span>
        </div>

        <div className="action-item" onClick={CommentHandler}>
          <span>
            <FontAwesomeIcon icon={faComment} /> 9 Comments
          </span>
        </div>

        <div className="action-item">
          <span>
            <FontAwesomeIcon icon={faShare} /> 11 Shares
          </span>
        </div>
      </div>

      {/* Conditionally render Comments */}
      {openComment && <Comments key={fed.id} />}
    </div>
  );
}
