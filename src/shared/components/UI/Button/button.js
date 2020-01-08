import React from 'react';
import classes from './button.module.sass'

const Button = props => {
  const componentClasses = [classes.Button];
  props.full && componentClasses.push(classes.Full)
  props.outlined && componentClasses.push(classes.Outlined)
  return <button className={componentClasses.join(' ')} {...props}></button>;
};

export default Button;