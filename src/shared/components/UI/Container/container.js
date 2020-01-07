import React from 'react';
import classes from './container.module.sass';

const concatClasses = (firstClasses, secondClasses) => {
  return [firstClasses, secondClasses].join(' ');
}

const Container = ({ children, className }) => {
  return (
    <div className={concatClasses(className, classes.Container)}>
      {children}
    </div>
  );
};

export default Container;
