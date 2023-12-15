import React from 'react';

import Button from 'react-bootstrap/Button';

import './choosecharacter.css';

export function wizard(){
  document.getElementById('myImage')
  .src="blue.png";
  document.getElementById('message')
  .innerHTML="Wizard Stats [database plug in]";
  selection = "wizard"
}

export function ranger(){
  document.getElementById('myImage')
  .src="green.png";
  document.getElementById('message')
  .innerHTML="Ranger Stats [database plug in]";
  selection = "ranger"
}
function barbarian(){
  document.getElementById('myImage')
  .src="red.png";
  document.getElementById('message')
  .innerHTML="Barbarian Stats [database plug in]";
  selection = "barbarian"
}
function databaseStat(){
  //will be filled out for database
}

//Set the chosen character once 'Begin' button pressed
async function SetCharacter(){ 
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

export function ChooseCharacter() {

  return (
    <main>
        <div class="header">
          <h1>Choose Your Character</h1>
        </div>
        <center-box>
          <h1 id="message">
            Character Stats [database plug in]
          </h1>
          <img id="myImage" src="blue.png" height="128px"/>
        </center-box>
    </main>
  );
}
