// VARIABLES
// bg color change animation
var btnColorSwitch = document.getElementById('btnSwitch');
var switchGif = document.getElementById('switchGif');
var mainColor = document.getElementById('main');
var projectBg = document.getElementsByClassName('project');
var intro = document.getElementById('introText');

  // text animation
  var bigText = document.getElementById('animateBigText');
  // console.log(projectBg);

// EVENT LISTENERS
// bg color change animation
btnColorSwitch.addEventListener('click', changeColor);

  // text animation
  bigText.addEventListener('mouseover', flipText);
  bigText.addEventListener('mouseout', flipBackText);

// FUNCTIONS
// bg color change animation
function changeColor() {
  // document.body.classList.toggle("darker");
  mainColor.classList.toggle("main-darker");
  btnColorSwitch.classList.toggle("rotate-button");
  projectBg[1].classList.toggle("darker-project");
  projectBg[2].classList.toggle("darker-project");
  projectBg[3].classList.toggle("darker-project");
  projectBg[4].classList.toggle("darker-project");
  projectBg[5].classList.toggle("darker-project");

  intro.classList.toggle("darker-font");
    // if (btnColorSwitch.innerHTML === "bring back the light") {
    //   btnColorSwitch.innerHTML = "I want it darker";
    // } else {
    //   btnColorSwitch.innerHTML = "bring back the light";
    // }
}

  // text animation
  function flipText() {
    bigText.style.fontSize = "3.2em";
    // bigText.style.lineHeight = "1.4em";
    bigText.style.fontFamily = "restora";
    bigText.style.fontStyle = "italic";
    bigText.innerHTML = "a designer";
    // bigText.innerHTML = "a developer";
    // bigText.innerHTML = "a creator";
  }
  function flipBackText() {
    bigText.style.fontSize = "3.2em";
    // bigText.style.lineHeight = "1em";
    bigText.style.fontFamily = "restora";
    bigText.innerHTML = "charlotte";
    bigText.style.fontStyle = "italic";
  }

// //Make the DIV element draggagle:
// dragElement(document.getElementById("moveImages"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     /* if present, the header is where you move the DIV from:*/
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     /* otherwise, move the DIV from anywhere inside the DIV:*/
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     /* stop moving when mouse button is released:*/
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }