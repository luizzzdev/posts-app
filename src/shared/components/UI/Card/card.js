import React from 'react';
import classes from './card.module.sass';

const Card = ({ children }) => {
  return <div className={classes.Card}>{children}</div>;
};

export default Card;
