import Aux from '../Aux/Aux';
import React from 'react';
import classes from './input.module.sass';

const Input = props => {
  let El;

  switch (props.inputtype) {
    case 'textarea':
      El = <textarea {...props} className={classes.Input}></textarea>;
      break;

    default:
      El = <input {...props} className={classes.Input} />;
      break;
  }

  return (
    <Aux>
      {El}
    </Aux>
  );
};

export default Input;
