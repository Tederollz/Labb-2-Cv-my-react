import React from 'react';

function ColorChanger({ changeBackgroundColor }) {
  return (
    <button onClick={changeBackgroundColor}>
      Ändra bakgrundsfärg
    </button>
  );
}

export default ColorChanger;
