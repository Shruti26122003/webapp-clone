import React from 'react';
import UserStory from './UserStory';
import StoriesData from '../../FackApis/StoriesData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Stories.css';

export default function Stories() {
  return (
    <div className='stories'>
      <UserStory />

      <Swiper
        style={{ width: '80%' }}
        slidesPerView={4}
        spaceBetween={10}
      >
        {StoriesData.map((story) => (
          <SwiperSlide key={story.id}>
            <div className="story">
              <div className="user">
                <img src={story.storyProfile} alt={`${story.name}'s profile`} />
              </div>
              <img src={story.story} alt={`${story.name}'s story`} />
              <h5>{story.name}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
