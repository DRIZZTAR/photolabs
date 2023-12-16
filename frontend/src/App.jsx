import React from 'react';

import PhotoList from './components/PhotoList';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import TopNavigation from './components/TopNavigationBar';
import TopicList from './components/TopicList';

const App = () => {
  return (
    <div className="App">
      <TopNavigation />
      <TopicList />
      {/*sampleDataForPhotoListItems.map(item => (<PhotoListItem key={item.id} props={item}/>))}
      {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
      <PhotoList />
    </div>
  );
};

export default App;
