import React from 'react';
import Aux from '../Aux/Aux';
import Toolbar from '../Toolbar/Toolbar';
import classes from './Layout.module.sass';

const Layout = props => {
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
