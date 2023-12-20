import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ id, urls, user, location, userFavourite, setUserFavourite, onPhotoClick }) => {
  const photo = { id, urls, user, location };
  return (
    <div className="photo-list__item" key={id}>
      <div className="photo-list__image-container">
        <img className="photo-list__image" src={urls.regular} alt="bannerPic" onClick={() => onPhotoClick(photo)}/>
        <PhotoFavButton className="photo-list__fav-icon" id ={ id } userFavourite={ userFavourite } setUserFavourite={ setUserFavourite } photo={photo}/>
      </div>
      <div className="photo-list__user photo-list__user-details">
        <img className="photo-list__user-profile photo-list__user-details" src={user.profile} alt="profilePic" />
        <div className="photo-list__user-info">
          <h1 className="photo-list__user-info">{user.username}</h1>
          <h2 className="photo-list__user-info photo-list__user-location">{location.city}, {location.country}</h2>
        </div>
      </div>
    </div>
  );
};
export default PhotoListItem;