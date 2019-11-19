import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import Contacts from './components/Contacts';

const App = () => {
  return (
    <>
      <header className="header">
        <Menu />
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={AboutMe} />
        <Route path="/work" component={MyWork} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </>
  );
};

export default App;