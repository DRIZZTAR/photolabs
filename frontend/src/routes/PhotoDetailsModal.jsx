import React from 'react';
import PropTypes from 'prop-types';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ onClose }) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        <img className="photo-details-modal__close-button" src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  )
};

PhotoDetailsModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PhotoDetailsModal;
