import React from 'react';
import Navbar from './components/Navbar/Navbar';
import PriceLists from './components/PriceLists/PriceLists';
import Rechart from './components/Rechart/Rechart';
import Phone from './components/Phone/Phone';

const App = () => {
  return (
    <div>      
      <Navbar />
      <PriceLists ></PriceLists>
      <Rechart />
      <Phone />
    </div>
  );
};

export default App;