import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

/**
 * HomeRoute Component
 * Represents the main view or homepage of the application. It renders the top navigation bar 
 * and the list of photos. 
 *
 * @param {Object} props - Component props
 * @param {Array} props.photos - Array of photos to be displayed
 * @param {Array} props.topics - Array of topics for the navigation bar
 * @param {Function} props.onPhotoClick - Function to handle click events on a photo
 * @param {Array} props.userFavourite - Array of user's favorite photos
 * @param {Function} props.setUserFavourite - Function to update the user's favorite photos
 * @param {Function} props.fetchPhotosByTopic - Function to fetch photos based on the selected topic
 */

const HomeRoute = ({ photos, topics, onPhotoClick, userFavourite, setUserFavourite, fetchPhotosByTopic }) => {

  const toggleFavourites = () => setShowFavourites(prev => !prev);

  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics}
        userFavourite={userFavourite}
        fetchPhotosByTopic={fetchPhotosByTopic}
        onFavClick={toggleFavourites}
      />
      <PhotoList
        photos={photos} 
        userFavourite={userFavourite} 
        setUserFavourite={setUserFavourite} 
        onPhotoClick={onPhotoClick}
      />
    </div>
  );
};

export default HomeRoute;

