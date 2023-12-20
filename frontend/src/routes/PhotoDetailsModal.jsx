import React from 'react';
import PropTypes from 'prop-types';

import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoList.scss';
import '../styles/PhotoListItem.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = ({ onClose, selectedPhoto, userFavourite, setUserFavourite, onPhotoClick, photos }) => {

  const selectedPhotoWithSimilar = photos.find(photo => photo.id === selectedPhoto.id);

  const { id, urls, user, location } = selectedPhoto;

  const similarPhotosArray = selectedPhotoWithSimilar.similar_photos || [];

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="Close" />
      </button>
      <div className="photo-list__item" key={id} style={{ border: 'none' }}>
        <div className="photo-list__image-container">
          <img className="photo-details-modal__image" src={urls.regular} alt={`Photo by ${user.name}`} />
          <PhotoFavButton photo={selectedPhoto} userFavourite={userFavourite} setUserFavourite={setUserFavourite} />
        </div>
        <div className="photo-details-modal__info-header-container">
          <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile" src={user.profile} alt={`${user.name}'s Profile`} />
            <div className="photo-details-modal__photographer-info-container">
              <div className="photo-details-modal__photographer-info">{user.username}</div>
              <div className="photo-details-modal__photographer-info photo-details-modal__photographer-location">{location.city}, {location.country}</div>
            </div>
          </div>
        </div>
        <h2>Similar Photos</h2>
        {similarPhotosArray.length > 0 ? (
          <PhotoList
            photos={similarPhotosArray}
            userFavourite={userFavourite}
            setUserFavourite={setUserFavourite}
            onPhotoClick={onPhotoClick}
          />
        ) : (
          <p>No similar photos available.</p>
        )}
      </div>
    </div>
  );
};

PhotoDetailsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  selectedPhoto: PropTypes.object.isRequired,
  userFavourite: PropTypes.array.isRequired,
  setUserFavourite: PropTypes.func.isRequired,
  onPhotoClick: PropTypes.func,
  photos: PropTypes.array.isRequired,
};

export default PhotoDetailsModal;