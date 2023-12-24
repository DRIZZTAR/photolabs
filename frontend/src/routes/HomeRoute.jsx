import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import '../styles/PhotoList.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import FavouritesPage from '../components/FavItems'; // Import FavouritesPage

const HomeRoute = ({ photos, topics, onPhotoClick, userFavourite, setUserFavourite, fetchPhotosByTopic }) => {
  // State to manage visibility of the FavouritesPage
  const [showFavourites, setShowFavourites] = useState(false);

  // Function to toggle the FavouritesPage visibility
  const toggleFavourites = () => setShowFavourites(prev => !prev);

  return (
    <div className="home-route">
      <TopNavigation 
        topics={topics}
        userFavourite={userFavourite}
        fetchPhotosByTopic={fetchPhotosByTopic}
        onFavClick={toggleFavourites} // Pass the toggle function
      />
      {/* Conditional rendering of FavouritesPage based on showFavourites state */}
      {showFavourites && <FavouritesPage userFavourite={userFavourite} />}
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

