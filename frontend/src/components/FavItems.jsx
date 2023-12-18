import React from 'react';
import PhotoListItem from './PhotoListItem';

const FavouritesPage = ({ userFavourite }) => {
  return (
    <div className="favourites-page">
      {userFavourite.map(id => (
        <PhotoListItem key={id} id={id} />
      ))}
    </div>
  );
};

export default FavouritesPage;