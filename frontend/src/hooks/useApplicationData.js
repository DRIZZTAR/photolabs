import { useReducer,useEffect } from 'react';

// Initial state for the application data
const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  userFavourite: [],
  photoData: [],
  topicData: [],
};

// Reducer function to manage the state of the application
function reducer(state, action) {
  switch (action.type) {
    case 'SET_PHOTO_DATA':
      return { ...state, photoData: action.payload };

    case 'SET_TOPIC_DATA':
      return { ...state, topicData: action.payload };

    case 'GET_PHOTOS_BY_TOPICS':
      const topicPhotos = state.photoData.filter(photo => photo.topic_id === action.topicId);
      return { ...state, filteredPhotoData: topicPhotos };
      
    case 'SET_PHOTOS_BY_TOPIC':
      return { ...state, photoData: action.payload };
      
    case 'OPEN_MODAL':
      return { ...state, isModalOpen: true, selectedPhoto: action.photo };

    case 'CLOSE_MODAL':
      return { ...state, isModalOpen: false };

    case 'SET_FAVOURITE':
      const isFavourite = state.userFavourite.some(favPhoto => favPhoto.id === action.photo.id);
      if (isFavourite) {
        return {
          ...state,
          userFavourite: state.userFavourite.filter(favPhoto => favPhoto.id !== action.photo.id)
        };
      } else {
        return {
          ...state,
          userFavourite: [...state.userFavourite, action.photo]
        };
      }

    default:
      return state;
  }
}

// Custom hook to manage and provide application data
export const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePhotoClick = (photo) => {
    dispatch({ type: 'OPEN_MODAL', photo });
  };

  const handleCloseModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const setUserFavourite = (favourites) => {
    if (favourites) {
      dispatch({ type: 'SET_FAVOURITE', photo: favourites });
    } else {
      console.error('setUserFavourite was called without a photo');
    }
  };

  // Fetch photo data on component mount
  useEffect(() => {
    fetch("/api/photos")
    .then((response) => response.json())
    .then((data) => dispatch({ type: 'SET_PHOTO_DATA', payload: data }))
    .catch((error) => console.error('Error fetching photo data:', error));
  }, []);
  
  // Fetch topic data on component mount
  useEffect(() => {
    fetch("/api/topics")
    .then((response) => response.json())
    .then((data) => dispatch({ type: 'SET_TOPIC_DATA', payload: data }))
    .catch((error) => console.error('Error fetching topic data:', error));
  }, []);

  // Function to fetch photos by topic
  const fetchPhotosByTopic = (topicId) => {
    fetch(`/api/topics/photos/${topicId}`)
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_PHOTOS_BY_TOPIC', payload: data }))
      .catch(error => console.error('Error fetching photos by topic:', error));
  };
  
  
  return {
    state,
    handlePhotoClick,
    handleCloseModal,
    setUserFavourite,
    fetchPhotosByTopic,
    useApplicationData,
  };
};