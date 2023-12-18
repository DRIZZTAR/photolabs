import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './styles/PhotoDetailsModal.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
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

  return (
    <div className="App">
      <HomeRoute 
        photos={photos} 
        topics={topics} 
        onPhotoClick={handlePhotoClick} 
        userFavourite={userFavourite} 
        setUserFavourite={setUserFavourite}
      />
      {isModalOpen && selectedPhoto && <PhotoDetailsModal 
        photos={photos} 
        selectedPhoto={selectedPhoto} 
        onClose={handleCloseModal}
        userFavourite={userFavourite}
        setUserFavourite={setUserFavourite}
      />}
    </div>
  );
};

export default App;

