import React from 'react';
import PhotoListItem from './PhotoListItem';

const FavouritesPage = ({ userFavourite }) => {
  return (
    <div className="favourites-page">
      {userFavourite.map(photo => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default FavouritesPage;
