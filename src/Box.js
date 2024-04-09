import React from 'react';

function Box({ width, height, backgroundColor, removeBox }) {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: backgroundColor,
    margin: '10px',
    display: 'inline-block',
    position: 'relative',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '5px',
    right: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={boxStyle}>
      <button style={buttonStyle} onClick={removeBox}>
        X
      </button>
    </div>
  );
}

export default Box;
