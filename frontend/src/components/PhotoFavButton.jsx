import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photo, userFavourite, setUserFavourite }) {
  // Assuming 'photo' is an object with an 'id' property
  const isFavorited = userFavourite.some(favPhoto => favPhoto.id === photo.id);

  const handleClick = () => {
    if (photo) {
      setUserFavourite(photo);
    } else {
      console.error('handleClick was called without a photo');
      console.trace();
    }
  };

  return (
    <button className="photo-list__fav-icon" onClick={handleClick}>
      <FavIcon isFavorited={isFavorited} className="photo-list__fav-icon-svg" />
    </button>
  );
};

export default PhotoFavButton;
