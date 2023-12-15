import React from 'react';

import Button from 'react-bootstrap/Button';

import './choosecharacter.css';

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

export function ChooseCharacter() {

  return (
    <main>
        <div class="header">
          <h1>Choose Your Character</h1>
        </div>
        <td valign="top">"  Hidden code: 1234 "</td> 
        <hr width="100%" size="2" color="blue" noshade></hr>
        <center-box>
          <h1 id="message">
            Character Stats
          </h1>
          <div>
          <img id="myImage" src="blue.png" height="128px"/>
          </div>
          <input id="clickme" type="button" value="Wizard" onClick={() => wizard()} />
          <input id="clickme" type="button" value="Ranger" onClick={() => ranger()} />
          <input id="clickme" type="button" value="Barbarian" onClick={() => barbarian()} />
          <hr width="100%" size="2" color="blue" noshade></hr>
          <div class="button">
            <input id="clickme" type="button" value="Begin" onClick={() => SetCharacter()} />
          </div>
        </center-box>


    </main>
  );
}
