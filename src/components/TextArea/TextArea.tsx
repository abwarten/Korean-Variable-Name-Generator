import React from 'react';
import './TextArea.css';

const TextArea = () => {
  return (
    <div>
      <button>
        <input type="text" maxLength={10} placeholder="요청"></input>
      </button>
    </div>
  );
};

export { TextArea };
