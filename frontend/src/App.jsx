import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './styles/PhotoDetailsModal.scss';
import { useApplicationData } from './hooks/useApplicationData';

const App = () => {
  const {
    state: {
      isModalOpen,
      selectedPhoto,
      userFavourite,
      photoData,
      topicData,
    },
    handlePhotoClick,
    handleCloseModal,
    setUserFavourite,
    fetchPhotosByTopic,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
        photos={photoData}
        topics={topicData}
        onPhotoClick={handlePhotoClick} 
        userFavourite={userFavourite} 
        setUserFavourite={setUserFavourite}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      {isModalOpen && selectedPhoto && <PhotoDetailsModal 
        photos={photoData}
        onClose={handleCloseModal}
        selectedPhoto={selectedPhoto}
        userFavourite={userFavourite}
        setUserFavourite={setUserFavourite}
        onPhotoClick={handlePhotoClick}
      />}
    </div>
  );
};

export default App;



