import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './styles/PhotoDetailsModal.scss';
import { useApplicationData } from './hooks/useApplicationData';


/**
 * App Component
 * This is the root component of the application. It manages the application state,
 * routing, and renders the main UI components.
 */
const App = () => {
  const {
    // Destructuring state and functions from the custom hook
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
      {/* HomeRoute component that handles the display of photos and topics */}
      <HomeRoute 
        photos={photoData}
        topics={topicData}
        onPhotoClick={handlePhotoClick} 
        userFavourite={userFavourite} 
        setUserFavourite={setUserFavourite}
        fetchPhotosByTopic={fetchPhotosByTopic}
      />
      {/* Conditionally rendering the PhotoDetailsModal if a modal is to be shown */}
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



