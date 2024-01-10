import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ userFavourite, setUserFavourite, onPhotoClick, photos }) => {
  return (
    <div className="photo-list">
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