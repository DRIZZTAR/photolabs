import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

/**
 * PhotoList Component
 * Renders a list of photo items. Each item in the list is represented by a PhotoListItem component.
 *
 * @param {Object} props - Component props
 * @param {Array} props.userFavourite - Array of user's favorite photos
 * @param {Function} props.setUserFavourite - Function to update the user's favorite photos
 * @param {Function} props.onPhotoClick - Function to handle the click event on a photo
 * @param {Array} props.photos - Array of photo objects to be displayed in the list
 */
const PhotoList = ({ userFavourite, setUserFavourite, onPhotoClick, photos }) => {
  return (
    <div className="photo-list">
      {/* Mapping through each photo and rendering a list item */}
      {photos && photos.map(photo => (
        <PhotoListItem 
          key={photo.id} 
          {...photo} 
          userFavourite={userFavourite} 
          setUserFavourite={setUserFavourite}
          onPhotoClick={onPhotoClick}
        />
      ))}
    </div>
  );
};

export default PhotoList;
