import React from 'react';
import HomeScreen from './components/HomeScreen';
import ResaleScreen from './components/ResaleScreen';
import BookServiceScreen from './components/BookServiceScreen';

const App = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-100 min-h-screen">
      <HomeScreen />
      <ResaleScreen />
      <BookServiceScreen />
    </div>
  );
};

export default App;