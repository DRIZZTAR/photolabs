import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photo, userFavourite, setUserFavourite }) {

  const isFavorited = userFavourite.some(favPhoto => favPhoto.id === photo.id);

  const handleClick = () => {
    if (photo) {
      setUserFavourite(photo);
    } else {
      console.error('handleClick was called without a photo');
    }
  };

  return (
    <button className="photo-list__fav-icon" onClick={handleClick}>
      <FavIcon className="photo-list__fav-icon-svg" isFavorited={isFavorited} />
    </button>
  );
};

export default PhotoFavButton;
