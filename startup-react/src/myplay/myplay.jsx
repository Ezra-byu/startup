import React from 'react';

import Button from 'react-bootstrap/Button';

import './myplay.css';

export function wizard(){
  document.getElementById('myImage')
  .src="blue.png";
  document.getElementById('message')
  .innerHTML="Wizard Stats";
  selection = "wizard"
}

export function ranger(){
  document.getElementById('myImage')
  .src="green.png";
  document.getElementById('message')
  .innerHTML="Ranger Stats";
  selection = "ranger"
}
export function barbarian(){
  document.getElementById('myImage')
  .src="red.png";
  document.getElementById('message')
  .innerHTML="Barbarian Stats";
  selection = "barbarian"
}
export function databaseStat(){
  //will be filled out for database
}

//Set the chosen character once 'Begin' button pressed
export async function SetCharacter(){ 
  console.log("selection")
  console.log(selection)
  
  //call the /characters api
  const response = await fetch('/api/characters', {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({character: selection}), //json object with one thing in it: selection
  });
  // const queue = await response.json();
  // localStorage.setItem('character type', JSON.stringify(queue));

  //change to the loading page (hints.html)
  window.location.href ="hints.html";
}

export function MyPlay() {

  return (
    <main>
      <div class="header"></div>
      <h1>Play</h1>
        <p>This black square is a stand in for what I will do in the future</p>
        <svg width="400" height="250">
          <rect width="400" height="250" />
        </svg>
    </main>
    
  );
}
