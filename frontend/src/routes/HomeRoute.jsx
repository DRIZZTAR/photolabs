import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import '../styles/PhotoList.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import FavouritesPage from '../components/FavItems'; // Import FavouritesPage

const HomeRoute = ({ photos, topics, onPhotoClick, userFavourite, setUserFavourite, fetchPhotosByTopic }) => {

  const [showFavourites, setShowFavourites] = useState(false);

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

