import React from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "../mocks/photos.js";

const PhotoList = ({ userFavourite, setUserFavourite, onPhotoClick, photos }) => {
  return (
    <div className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem 
          key={photo.id} 
          {...photo} 
          userFavourite={userFavourite} 
          setUserFavourite={setUserFavourite}
          onPhotoClick={onPhotoClick}
          photo={photo} 
        />
      ))}
    </div>
  );
};

export default PhotoList;