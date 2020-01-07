import React from 'react';
import './App.css';
import Posts from './posts/Posts';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Switch>
        <Route component={Posts} />
      </Switch>
    </div>
  );
};

export default App;
