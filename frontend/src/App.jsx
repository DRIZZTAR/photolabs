import React, { useState } from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './styles/PhotoDetailsModal.scss';
import photos from './mocks/photos';
import topics from './mocks/topics';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhotoClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} onPhotoClick={handlePhotoClick} />
      {isModalOpen && <PhotoDetailsModal photos={photos} topics={topics} className="photo-details-modal" onClose={handleCloseModal}/>}
    </div>
  );
};

export default App;

