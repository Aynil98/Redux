import React from 'react';

const LoadingDisplay = (props) => {
  return (
        <div class="ui active dimmer">
          <div class="ui big text loader">{props.message }</div>
      </div>
  );
}

LoadingDisplay.defaultProps ={
  message: 'Loading...'
};

export default LoadingDisplay;
