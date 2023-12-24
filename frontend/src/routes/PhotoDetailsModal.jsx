import React, { useRef, useEffect } from 'react';
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

  const modalOverlayRef = useRef(null);
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalOverlayRef.current && event.target === modalOverlayRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    if (selectedPhoto && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedPhoto]);
  

  return (
    <div className="photo-details-modal-overlay" ref={modalOverlayRef}>
      <div className="photo-details-modal" ref={modalRef}>
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="Close" />
        </button>
        <div className="photo-list__item" key={id} style={{ border: 'none' }}>
        <div className="photo-list__image-container">
          <img className="photo-details-modal__image" src={urls.regular} alt={`Photo by ${user.name}`} />
          <PhotoFavButton photo={selectedPhoto} userFavourite={userFavourite} setUserFavourite={setUserFavourite} />
        </div>
        <div className="photo-details-modal__info-header-container photo-details-modal__top-bar">
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