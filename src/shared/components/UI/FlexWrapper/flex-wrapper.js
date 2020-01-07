import React from 'react';
import classes from './flex-wrapper.module.sass';

const extractStyle = props => {
  const style = {};
  if (props.justifyContent) style.justifyContent = props.justifyContent;
  return style;
};

const FlexWrapper = props => {
  return (
    <div className={classes.FlexWrapper} style={extractStyle(props)}>
      {props.children}
    </div>
  );
};

export default FlexWrapper;
