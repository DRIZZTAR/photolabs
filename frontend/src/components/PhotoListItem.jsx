import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

/**
 * PhotoListItem Component
 * Represents a single item in a photo list, displaying an image, user information, and a favorite button.
 *
 * @param {Object} props - Component props
 * @param {string} props.id - Unique identifier for the photo
 * @param {Object} props.urls - Object containing different URL formats of the photo
 * @param {Object} props.user - Information about the user who posted the photo
 * @param {Object} props.location - Location information of the photo
 * @param {Array} props.userFavourite - Array of user's favourite photos
 * @param {Function} props.setUserFavourite - Function to update user's favourite photos
 * @param {Function} props.onPhotoClick - Function to handle click events on the photo
 */
const PhotoListItem = ({ id, urls, user, location, userFavourite, setUserFavourite, onPhotoClick }) => {
  // Constructing a photo object for easy passing to event handlers
  const photo = { id, urls, user, location };

  return (
    <div className="photo-list__item" key={id}>
      {/* Container for the photo and the favorite button */}
      <div className="photo-list__image-container">
        <img 
          className="photo-list__image" 
          src={urls.regular} 
          alt="bannerPic" 
          onClick={() => onPhotoClick(photo)}
        />
        <PhotoFavButton 
          className="photo-list__fav-icon"
          id={id}
          userFavourite={userFavourite}
          setUserFavourite={setUserFavourite}
          photo={photo}
        />
      </div>
      {/* Container for user information */}
      <div className="photo-list__user photo-list__user-details">
        {/* User's profile picture */}
        <img 
          className="photo-list__user-profile photo-list__user-details"
          src={user.profile}
          alt="profilePic"
        />
        {/* User's name and location */}
        <div className="photo-list__user-info">
          <h2 className="photo-list__user-info">{user.username}</h2>
          <h3 className="photo-list__user-info photo-list__user-location">
            {location.city}, {location.country}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;