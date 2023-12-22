import { useReducer,useEffect } from 'react';

const initialState = {
  isModalOpen: false,
  selectedPhoto: null,
  userFavourite: [],
};

function reducer(state, action) {
  switch (action.type) {
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
      console.trace(); // This will print a stack trace
    }
  };

  return {
    state,
    handlePhotoClick,
    handleCloseModal,
    setUserFavourite,
  };
};