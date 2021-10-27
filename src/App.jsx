import React from 'react';
import Header from './Header.jsx';
import ActivityFeed from './ActivityFeed.js';


//Rendering the ActivityFeed component below
const App = () => {
  return (
    <div className='container'>
      <Header />
      <ActivityFeed />
      <div className="container-view">
      </div>
    </div>
  );
};


export default App;
