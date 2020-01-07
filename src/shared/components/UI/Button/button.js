import React from 'react';
import classes from './button.module.sass'

const Button = props => {
  return <button className={classes.Button} {...props}></button>;
};

export default Button;