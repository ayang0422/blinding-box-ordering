import React from 'react';
import BlindBox from './components/BlindBox';

const App: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <div className="container">
      <BlindBox items={items} />
    </div>
  );
};

export default App;