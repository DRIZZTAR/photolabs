import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ userFavourite }) => {
  return (
    <div className='fav-badge'>
      <FavIcon isFavorited={userFavourite && userFavourite.length > 0}/>
      {userFavourite && userFavourite.length > 0 && (
        <span className='fav-badge__count'>{userFavourite.length}</span>
      )}
    </div>
  ) 
};

export default FavBadge;
