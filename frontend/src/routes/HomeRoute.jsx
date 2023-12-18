import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({ photos, topics }) => {
  const [userFavourite, setUserFavourite] = useState([]);

  return (
    <div className="home-route">
      <TopNavigation topics={topics} userFavourite={userFavourite} />
      <PhotoList photos={photos} userFavourite={userFavourite} setUserFavourite={setUserFavourite} />
    </div>
  );
};

export default HomeRoute;
