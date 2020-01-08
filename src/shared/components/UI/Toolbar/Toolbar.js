import React from 'react';
import classes from './Toolbar.module.sass';
import { UserContext, UserProvider } from '../../../context/userContext';

const Toolbar = props => {
  const { user } = React.useContext(UserContext);

  return (
    <header className={classes.Toolbar}>
      <p>{user.nickname}</p>
    </header>
  );
};

export default Toolbar;
