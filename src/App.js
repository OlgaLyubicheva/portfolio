import React from 'react';
import Menu from './components/Menu';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <header className="header">
        <Menu />
      </header>
      <Home />
    </>
  );
};

export default App;