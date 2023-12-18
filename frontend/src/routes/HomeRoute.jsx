import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({ photos, topics, onPhotoClick, userFavourite, setUserFavourite }) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} userFavourite={userFavourite} />
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
