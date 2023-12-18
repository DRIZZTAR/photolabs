import React from 'react';
import PropTypes from 'prop-types';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = ({ onClose, photos, selectedPhoto, userFavourite, setUserFavourite }) => {
  const { id, urls, user, location } = selectedPhoto;
  

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img className='photo-details-modal__image ' src={urls.full} alt="bannerPic" />
      <PhotoList photos={photos} userFavourite={userFavourite} setUserFavourite={setUserFavourite} />
    </div>
  )
};

PhotoDetailsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  userFavourite: PropTypes.array.isRequired,
  setUserFavourite: PropTypes.func.isRequired,
};

export default PhotoDetailsModal;
