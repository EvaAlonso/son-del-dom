
const bombo = document.querySelector(".bombo-centro");
const floorTom = document.querySelector(".tom-suelo");
const tomUpLeft = document.querySelector(".tom-superior-izquierda");
const tomDown = document.querySelector(".tom-inferior");
const snareDrum = document.querySelector(".caja");
const ride = document.querySelector(".ride");
const crash = document.querySelector(".crash");
const hitHat = document.querySelector(".hi-hat");

function playBombo() {
  new Audio("./sounds/boom.wav").play();
  bombo.classList.toggle("light");
}
function playFloorTom() {
  new Audio("./sounds/tom.wav").play();
  floorTom.classList.toggle("light");
}
function playTom() {
  new Audio("./sounds/kick.wav").play();
  tomUpLeft.classList.toggle("light");
}
function playSnareDrum() {
  new Audio("./sounds/snare.wav").play();
  tomDown.classList.toggle("light");
}
function playClap() {
  new Audio("./sounds/clap.wav").play();
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
  new Audio("./sounds/hihat.wav").play();
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
/* document.addEventListener("keydown", (event) => {
  switch (event.key) {

      // Nota C3 (Do3)
      case 'a':
      case 'A':
      case '65':
          doNotePlay();
          break;
  
      // Nota Db3 (Reb3)
      case 'w':
      case 'W':
      case '87':
          doSosNotePlay();
          break;

      // Nota D3 (Re3)
      case 's':
      case 'S':
      case '83':
          reNotePlay();
          break;

      // Nota Eb3 (Mib3)
      case 'e':
      case 'E':
      case '69':
          reSosNotePlay();
          break;

      // Nota E3 (Mi3)
      case 'd':
      case 'D':
      case '68':
          miNotePlay();
          break;
      
      // Nota F3 (F3)
      case 'f':
      case 'F':
      case '70':
          faNotePlay();
          break;
      
      // Nota Gb3 (Solb3)
      case 't':
      case 'T':
      case '84':
          faSosNotePlay();
          break;

      // Nota G3 (Sol3)
      case 'g':
      case 'G':
      case '71':
          solNotePlay();
          break;

      // Nota Ab3 (Lab3)
      case 'y':
      case 'Y':
      case '89':
          solSosNotePlay();
          break;

      // Nota A3 (La3)
      case 'h':
      case 'H':
      case '72':
          laNotePlay();
          break;
      
      // Nota Bb3 (Sib3)
      case 'u':
      case 'U':
      case '85':
          laSosNotePlay();
          break;

      // Nota B3 (Si3)
      case 'j':
      case 'J':
      case '74':
          siNotePlay();
          break;

      // Nota C4 (Do4)
      case 'k':
      case 'K':
      case '75':
          do8NotePlay();
          break;

      // Cualquier otra tecla no hace nada
      default:
          break;
  }; 
*/