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

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} onPhotoClick={handlePhotoClick} />
      {isModalOpen && <PhotoDetailsModal className="photo-details-modal"/>}
    </div>
  );
};

export default App;

