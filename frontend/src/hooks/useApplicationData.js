// useApplicationData.js
import { useState } from 'react';

export const useApplicationData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [userFavourite, setUserFavourite] = useState([]);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return {
    state: {
      isModalOpen,
      selectedPhoto,
      userFavourite,
      handlePhotoClick,
      handleCloseModal,
      setUserFavourite
  }
  };
};