
const bombo = document.querySelector(".bombo-centro");
const floorTom = document.querySelector(".tom-suelo");
const tomUpLeft = document.querySelector(".tom-superior-izquierda");
const tomDown = document.querySelector(".tom-inferior");
const snareDrum = document.querySelector(".caja");
const ride = document.querySelector(".ride");
const crash = document.querySelector(".crash");
const hitHat = document.querySelector(".hi-hat");

function playBombo() {
  new Audio("./sounds/tom.wav").play();
  bombo.classList.toggle("light");
}
function playFloorTom() {
  new Audio("./sounds/BlastBlock.wav").play();
  floorTom.classList.toggle("light");
}
function playTom() {
  new Audio("./sounds/kick.wav").play();
  tomUpLeft.classList.toggle("light");
}

function playClap() {
  new Audio("./sounds/clap.wav").play();
  tomDown.classList.toggle("light");
}
function playSnareDrum() {
  new Audio("./sounds/snare.wav").play();
  snareDrum.classList.toggle("light");
}
function playRide() {
  new Audio("./sounds/ride.wav").play();
  ride.classList.toggle("light");
}
function playCrash() {
  new Audio("./sounds/openhat.wav").play();
  crash.classList.toggle("light");
}
function playHitHat() {
  new Audio("./sounds/HHsort.wav").play();
  hitHat.classList.toggle("light");
}
bombo.addEventListener('click', () => playBombo());
floorTom.addEventListener("click", () => {
  playFloorTom();
  
});
tomUpLeft.addEventListener("click", () => playTom());
tomDown.addEventListener("click", () => playClap());
snareDrum.addEventListener("click", () => playSnareDrum());
ride.addEventListener("click", () => playRide());
crash.addEventListener("click", () => playCrash());
hitHat.addEventListener("click", () => playHitHat());

/* EVENTO Notas Teclado */
document.addEventListener("keydown", (event) => {
  switch (event.key) {

      // Ride
      case 'a':
      case 'A':
      case '65':
        playRide();
          break;
  // Tom-superior-izquierda
      case 's':
      case 'S':
      case '83':
          playTom();
          break;
      // caja
      case 'd':
      case 'D':
      case '68':
          playSnareDrum();
          break;
      // Tom-inferior
      case 'f':
      case 'F':
      case '70':
          playFloorTom();
          break;
      //Crash
      case 'g':
      case 'G':
      case '71':
          playCrash();
          break;
// Hi-hat
      case 'h':
      case 'H':
      case '72':
          playHitHat();
          break;
     // Bombo
      case 'j':
      case 'J':
      case '74':
        playBombo();
          break;
      
      // tom-suelo
      case 'k':
      case 'K':
      case '75':
         tomDown();
          break;

      // Cualquier otra tecla no hace nada
      default:
          break;
  }}) 
