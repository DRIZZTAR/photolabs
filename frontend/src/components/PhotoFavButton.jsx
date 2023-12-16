import React, { useState } from 'react';
import FavIcon from './FavIcon';

function PhotoFavButton() {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
  <button onClick={handleClick} className="photo-list__fav-icon">
    <FavIcon isFavorited={isFavorited} />
  </button>
  );
}

export default PhotoFavButton;