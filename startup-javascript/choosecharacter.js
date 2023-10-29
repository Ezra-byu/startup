// function changeImage() {
//     if (document.getElementById("imgClickAndChange").src == "green.png"){
//         document.getElementById("imgClickAndChange").src = "blue_sprite_1";
//     } else {
//         document.getElementById("imgClickAndChange").src = "/red.png";
//     }
// }
function wizard(){
    document.getElementById('myImage')
    .src="green.png";
    document.getElementById('message')
    .innerHTML="Ranger Stats [database plug in]";
}
function ranger(){
    document.getElementById('myImage')
    .src="blue_sprite_1.png";
    document.getElementById('message')
    .innerHTML="Wizard Stats [database plug in]";
}
function barbarian(){
    document.getElementById('myImage')
    .src="red.png";
    document.getElementById('message')
    .innerHTML="Barbarian Stats [database plug in]";
}
function databaseStat(){
    //will be filled out for database
}