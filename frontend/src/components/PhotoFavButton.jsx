import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ id, userFavourite, setUserFavourite }) {
  const isFavorited = userFavourite.includes(id);

  const handleClick = () => {
    if (isFavorited) {
      setUserFavourite(prevFavourites => {
        const newFavourites = prevFavourites.filter(favId => favId !== id);
        console.log('Favourites after removal:', newFavourites);
        return newFavourites;
      });
    } else {
      setUserFavourite(prevFavourites => {
        const newFavourites = [...prevFavourites, id];
        console.log('Favourites after addition:', newFavourites);
        return newFavourites;
      });
    }
  };

  return (
    <button className="photo-list__fav-icon" onClick={handleClick}>
      <FavIcon isFavorited={isFavorited} className="photo-list__fav-icon-svg" />
    </button>
  );
};

export default PhotoFavButton;