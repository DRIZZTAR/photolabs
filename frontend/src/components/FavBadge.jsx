import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

/**
 * FavBadge Component
 * Renders a badge showing the number of favorites a user has. It includes a heart-shaped icon 
 * and a count of the user's favorite photos. Clicking the badge can trigger an associated action.
 *
 * @param {Object} props - Component props
 * @param {Array} props.userFavourite - Array of user's favorite photos
 * @param {Function} props.onFavClick - Function to handle click events on the favorite badge
 */
const FavBadge = ({ userFavourite, onFavClick }) => {
  return (
    <div className='fav-badge' onClick={onFavClick}>
      <FavIcon isFavorited={userFavourite && userFavourite.length > 0}/>
      {/* Conditionally display the count of favorite photos */}
      {userFavourite && userFavourite.length > 0 && (
        <span className='fav-badge__count'>{userFavourite.length}</span>
      )}
    </div>
  );
};

export default FavBadge;w