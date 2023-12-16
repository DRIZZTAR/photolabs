import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({props}) => {
  return (
    <div className="photo-list__item" key={props.id}>
<div className="photo-list__image-container">
  <img className="photo-list__image" src={props.imageSource} alt="bannerPic" />
  <PhotoFavButton />
</div>
      <div className="photo-list__user photo-list__user-details">
        <img className="photo-list__user-profile photo-list__user-details" src={props.profile} alt="profilePic" />
        <div className="photo-list__user-info">
          <h1 className="photo-list__user-info">{props.username}</h1>
          <h2 className="photo-list__user-info photo-list__user-location">{props.location.city}, {props.location.country}</h2>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
