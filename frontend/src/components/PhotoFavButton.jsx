import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

/**
 * PhotoFavButton Component
 * Renders a button that allows users to mark or unmark a photo as a favorite.
 *
 * @param {Object} props - Component props
 * @param {Object} props.photo - The photo object associated with this favorite button
 * @param {Array} props.userFavourite - Array of user's favorite photos
 * @param {Function} props.setUserFavourite - Function to update the user's favorite photos
 */

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
      {/* Render favorite icon with the appropriate state */}
      <FavIcon className="photo-list__fav-icon-svg" isFavorited={isFavorited} />
    </button>
  );
};

export default PhotoFavButton;
