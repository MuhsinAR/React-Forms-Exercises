import React, { useState } from 'react';

function NewBoxForm({ addBox }) {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ width: parseInt(width), height: parseInt(height), backgroundColor });
    setWidth('');
    setHeight('');
    setBackgroundColor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          type="number"
          id="width"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          type="text"
          id="backgroundColor"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
        />
      </div>
      <button type="submit">Add Box</button>
    </form>
  );
}

export default NewBoxForm;
