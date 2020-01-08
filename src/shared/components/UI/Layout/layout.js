import React from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../Toolbar/Toolbar';
import classes from './Layout.module.sass';
import { UserProvider } from '../../../context/userContext';

const Layout = props => {
  return (
    <Aux>
      <UserProvider>
        <Toolbar />
      </UserProvider>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
