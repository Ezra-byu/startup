

function getQuote(){
    //will be filled out more for database/websocker
    document.getElementById('hint')
    .innerHTML="Use the cleric's healing power sparingly...it takes 4 rounds to refill.";
}

function displayQuote(data) {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        const containerEl = document.querySelector('#quote');
  
        const quoteEl = document.createElement('p');
        quoteEl.classList.add('quote');
        const authorEl = document.createElement('p');
        authorEl.classList.add('author');
  
        quoteEl.textContent = data.content;
        authorEl.textContent = data.author;
  
        containerEl.appendChild(quoteEl);
        containerEl.appendChild(authorEl);
      });
  }

 function display_character(character){
  //this function call to get the users character
  // character = fetch('api/character')
  // console.log(character)
  //it then uses this to change the icon on the page  
  if (character == 'wizard'){
    document.getElementById('loadingImage')
    .src="blue.png";
  } else if (character == 'ranger')  {
    document.getElementById('loadingImage')
    .src="green.png";
  } else if (character == 'barbarian')  {
    document.getElementById('loadingImage')
    .src="red.png";
  }
 } 

async function printCharacter(){
  let queue = [];
  try{
    let response = await fetch('/api/characters');
    let res = await response.json()
    console.log(res.character)
    display_character(res.character);



  } catch (error){
    //catch error
    console.log(error);
  }
}

// function configureWebSocket() {
//   const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
//   const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);
//   socket.onopen = (event) => {
//     displayMsg('system', 'game', 'connected');
//   };
//   broadcastEvent("A character has been chosen by a player");
//   socket.onclose = (event) => {
//     displayMsg('system', 'game', 'disconnected');
//   };
//   socket.onmessage = async (event) => {
//     const msg = JSON.parse(await event.data.text());
//     if (msg.type === GameEndEvent) {
//       displayMsg('player', msg.from, `has chosen a character`);
//     } else if (msg.type === GameStartEvent) {
//       displayMsg('player', msg.from, `started a new game`);
//     }
//   };
// }

// function displayMsg(cls, from, msg) {
//   const chatText = document.querySelector('#player-messages');
//   chatText.innerHTML =
//     `<div class="event"><span class="${cls}-event">${from}</span> ${msg}</div>` + chatText.innerHTML;
// }

// function broadcastEvent(from) {
//   const event = {
//     from: from,
//   };
//   socket.send(JSON.stringify(event));
// }


//display quote right off the bat
displayQuote();