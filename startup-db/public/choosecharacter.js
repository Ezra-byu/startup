// function changeImage() {
//     if (document.getElementById("imgClickAndChange").src == "green.png"){
//         document.getElementById("imgClickAndChange").src = "blue_sprite_1";
//     } else {
//         document.getElementById("imgClickAndChange").src = "/red.png";
//     }
// }
var selection = ""

function wizard(){
    document.getElementById('myImage')
    .src="blue_sprite_1.png";
    document.getElementById('message')
    .innerHTML="Wizard Stats [database plug in]";
    selection = "wizard"
}
function ranger(){
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
  // window.location.href ="hints.html";
}
