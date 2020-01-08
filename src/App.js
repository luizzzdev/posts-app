import React from 'react';
import './App.css';
import Posts from './posts/Posts';
import { Route, Switch } from 'react-router-dom';
import Login from './auth/components/Login/Login';
import Register from './auth/components/Register/Register';
import { UserProvider } from './shared/context/userContext';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/auth/signup" component={Register} />
          <Route path="/auth/login">
            <UserProvider>
              <Login />
            </UserProvider>
          </Route>
          <Route path="/posts" component={Posts} />
      </Switch>
    </div>
  );
};

export default App;
