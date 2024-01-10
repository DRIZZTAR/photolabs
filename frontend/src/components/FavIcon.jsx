import React from 'react';

/**
 * FavIcon Component
 * Renders a heart-shaped icon used to indicate a favorite state.
 *
 * @param {Object} props - Component props
 * @param {boolean} props.isFavorited - Determines whether the icon is in a favorited state
 */
const FavIcon = ({ isFavorited }) => {
  return (
    <svg width="20" height="17" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Heart shape path with dynamic stroke and fill based on the isFavorited prop */}
      <path 
        d="M11 18C11 18 2 12.5909 2 6.02273C2 4.8616 2.4165 3.73633 3.17862 2.83838C3.94075 1.94043 5.00143 1.32526 6.1802 1.09755C7.35897 0.869829 8.58301 1.04363 9.64406 1.58938C10.7051 2.13512 11.5376 3.0191 12 4.09092C12.4624 3.0191 13.2949 2.13512 14.3559 1.58938C15.417 1.04363 16.641 0.869829 17.8198 1.09755C18.9986 1.32526 20.0593 1.94043 20.8214 2.83838C21.5835 3.73633 22 4.8616 22 6.02273C22 12.5909 13 18 13 18Z" 
        stroke={isFavorited ? "#C80000" : "#000000"} 
        fill={isFavorited ? "#C80000" : "none"}
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FavIcon;