import React from 'react';
import PropTypes from 'prop-types';

import '../styles/PhotoDetailsModal.scss'
import '../styles/PhotoList.scss';
import '../styles/PhotoListItem.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ onClose, photos, selectedPhoto, userFavourite, setUserFavourite }) => {
  const { id, urls, user, location } = selectedPhoto;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img className="photo-details-modal__close-button" src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-list__item" key={id} style={{border: 'none'}}>
        <div className="photo-list__image-container">
          <img className="photo-details-modal__image" src={urls.regular} alt="bannerPic"/>
          <PhotoFavButton className="photo-list__fav-icon" id={id} userFavourite={userFavourite} setUserFavourite={setUserFavourite}/>
        </div>
        <div className="photo-details-modal__info-header-container">
          <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile" src={user.profile} alt="profilePic" />
            <div className="photo-details-modal__photographer-info-container">
              <div className="photo-details-modal__photographer-info">{user.username}</div>
              <div className="photo-details-modal__photographer-info photo-details-modal__photographer-location">{location.city}, {location.country}</div>
            </div>
          </div>
        </div>
        <h2 className="photo-details-modal__header">Similar Photos</h2>
      </div>
      <PhotoList className="photo-details-modal__images" photos={photos} userFavourite={userFavourite} setUserFavourite={setUserFavourite} />
    </div>
  )
};

PhotoDetailsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  userFavourite: PropTypes.array.isRequired,
  setUserFavourite: PropTypes.func.isRequired,
};

export default PhotoDetailsModal;