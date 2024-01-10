import React from 'react';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

/**
 * TopNavigation
 * This component renders the top navigation bar of the application. 
 * It includes the application logo, a list of topics, and a badge for favorite photos.
 *
 * @param {Object} props - Component props
 * @param {Array} props.userFavourite - Array of user's favorite photos
 * @param {Array} props.topics - Array of topics to be displayed in the topic list
 * @param {Function} props.fetchPhotosByTopic - Function to fetch photos based on a selected topic
 */
const TopNavigation = ({ userFavourite, topics, fetchPhotosByTopic }) => {
  return (
    <div className="top-nav-bar">
      {/* Application logo */}
      <span className="top-nav-bar__logo">PhotoLabs</span>

      {/* List of topics */}
      <TopicList topics={topics} fetchPhotosByTopic={fetchPhotosByTopic} />

      {/* Badge indicating the number of favorite photos */}
      <FavBadge userFavourite={userFavourite} />
    </div>
  );
}

export default TopNavigation;
