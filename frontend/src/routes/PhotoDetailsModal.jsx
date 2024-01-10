import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from '../components/PhotoFavButton';
import PhotoList from '../components/PhotoList';

/**
 * PhotoDetailsModal Component
 * Displays a modal with detailed view of the selected photo along with similar photos.
 *
 * @param {Object} props - Component props
 * @param {Function} props.onClose - Function to close the modal
 * @param {Object} props.selectedPhoto - Photo object to display in the modal
 * @param {Array} props.userFavourite - Array of user's favourite photos
 * @param {Function} props.setUserFavourite - Function to update user's favourite photos
 * @param {Function} props.onPhotoClick - Function to handle photo click event
 * @param {Array} props.photos - Array of all photos
 */

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

  // Effect to handle click outside modal and modal display behavior
  useEffect(() => {
      // Scroll the modal into view when the selected photo changes
    if (selectedPhoto && modalRef.current) {
      // Using setTimeout to ensure the scroll action happens after the modal is updated with the new photo
      setTimeout(() => {
        modalRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 0);
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
        {/*Large modal image*/}
        <div className="photo-list__item" key={id} style={{ border: 'none' }}>
        <div className="photo-list__image-container">
          <img className="photo-details-modal__image" src={urls.regular} alt={`Photo by ${user.name}`} />
          <PhotoFavButton 
            photo={selectedPhoto} 
            userFavourite={userFavourite} 
            setUserFavourite={setUserFavourite} 
          />
        </div>
        {/*Photographer details of selected image */}
        <div className="photo-details-modal__top-bar">
          <div className="photo-details-modal__photographer-details">
            <img className="photo-details-modal__photographer-profile" src={user.profile} alt={`${user.name}'s Profile`} />
            <div className="photo-details-modal__photographer-info-container">
              <div className="photo-details-modal__photographer-info">{user.username}</div>
              <div className="photo-details-modal__photographer-info photo-details-modal__photographer-location">{location.city}, {location.country}</div>
            </div>
          </div>
        </div>
        <h2 className='photo-details-modal__header'>Similar Photos</h2>
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

// PropType validation for robustness and documentation
PhotoDetailsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  selectedPhoto: PropTypes.object.isRequired,
  userFavourite: PropTypes.array.isRequired,
  setUserFavourite: PropTypes.func.isRequired,
  onPhotoClick: PropTypes.func,
  photos: PropTypes.array.isRequired,
};

export default PhotoDetailsModal;