import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    setBoxes([...boxes, box]);
  };

  const removeBox = (index) => {
    setBoxes(boxes.filter((_, i) => i !== index));
  };

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {boxes.map((box, index) => (
        <Box
          key={index}
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor}
          removeBox={() => removeBox(index)}
        />
      ))}
    </div>
  );
}

export default BoxList;
