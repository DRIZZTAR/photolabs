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
      photoData, // This is destructured from the state object
      topicData, // This is destructured from the state object
    },
    handlePhotoClick,
    handleCloseModal,
    setUserFavourite,
  } = useApplicationData();

  console.log('Type of userFavourite:', typeof userFavourite);

  return (
    <div className="App">
      <HomeRoute 
        photos={photoData} // Use photoData directly
        topics={topicData} // Use topicData directly
        onPhotoClick={handlePhotoClick} 
        userFavourite={userFavourite} 
        setUserFavourite={setUserFavourite}
      />
      {isModalOpen && selectedPhoto && <PhotoDetailsModal 
        photos={photoData} // Use photoData directly
        onClose={handleCloseModal}
        selectedPhoto={selectedPhoto}
        userFavourite={userFavourite}
        setUserFavourite={setUserFavourite}
      />}
    </div>
  );
};

export default App;



