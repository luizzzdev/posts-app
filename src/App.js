import React from 'react';
import './App.css';
import Posts from './posts/Posts';
import { Route, Switch } from 'react-router-dom';
import Login from './auth/components/Login/Login';
import Register from './auth/components/Register/Register';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/signup" component={Register} />
        <Route path="/" component={Posts} />
      </Switch>
    </div>
  );
};

export default App;
