import React from 'react';
import classes from './Text.module.sass';

const Text = ({ children, danger, center, mid, light }) => {
  const componentClasses = [classes.Text];

  danger && componentClasses.push(classes.Danger);
  center && componentClasses.push(classes.Center);
  mid && componentClasses.push(classes.Mid);
  light && componentClasses.push(classes.Light)

  return <p className={componentClasses.join(' ')}>{children}</p>;
};

export default Text;
