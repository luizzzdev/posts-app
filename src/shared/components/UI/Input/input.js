import Aux from '../Aux/Aux';
import React from 'react';
import classes from './input.module.sass';

const Input = props => {
  let El;

  const elementClasses = [classes.Input];

  !!props.invalid && elementClasses.push(classes.Error)

  switch (props.inputtype) {
    case 'textarea':
      El = <textarea {...props} className={elementClasses.join(' ')}></textarea>;
      break;

    default:
      El = <input {...props} className={elementClasses.join(' ')} />;
      break;
  }

  return (
    <Aux>
      {El}
    </Aux>
  );
};

export default Input;
