import React from 'react';

import PhotoList from './components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      {/*sampleDataForPhotoListItems.map(item => (<PhotoListItem key={item.id} props={item}/>))}
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      <PhotoList />
    </div>
  );
};

export default App;
