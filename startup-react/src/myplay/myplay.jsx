import React from 'react';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';

import './myplay.css';


export function MyPlay() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);

  }
  return (
    <main>
      <button onClick={handleClick}>
      You pressed me {count} times
    </button>
      <div class="header"></div>
      <h1>Play</h1>
        <p>This black square is a stand in for what I will do in the future</p>
        <svg width="400" height="250">
          <rect width="400" height="250" />
        </svg>


    </main>
    
  );
}
