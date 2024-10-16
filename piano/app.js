const pianoKeys = document.querySelectorAll('.key')

function playSound(newUrl) {
  console.log(newUrl)
  new Audio(newUrl).play()
}

pianoKeys.forEach((pianoKey, i) => {
  const number = i < 9 ? '0' + (i + 1) : (i + 1)
  const newUrl = '24-piano-keys/key' + number + '.mp3'
  //console.log(newUrl)
  pianoKey.addEventListener('click', () => playSound(newUrl) )
})
/* EVENTO Notas Teclado */
document.addEventListener("keydown", (event) => {
  switch (event.key) {

      // Do3
      case 'a':
      case 'A':
      case '65':
       playSound("./24-piano-keys/key11.mp3");
          break;
  // Re3
      case 's':
      case 'S':
      case '83':
        playSound("./24-piano-keys/key12.mp3");
          break;
      // Mi3
      case 'd':
      case 'D':
      case '68':
        playSound("./24-piano-keys/key13.mp3");
          break;
      // Fa3
      case 'f':
      case 'F':
      case '70':
        playSound("./24-piano-keys/key14.mp3");
          break;
      //Sol3
      case 'g':
      case 'G':
      case '71':
        playSound("./24-piano-keys/key15.mp3");
          break;
      //La3   
      case 'h':
      case 'H':
      case '72':
        playSound("./24-piano-keys/key16.mp3");
          break;
     //Si3
      case 'j':
      case 'J':
      case '74':
        playSound("./24-piano-keys/key17.mp3");
          break;
      
      // Do4
      case 'k':
      case 'K':
      case '75':
        playSound("./24-piano-keys/key18.mp3");
          break;

      // Cualquier otra tecla no hace nada
      default:
          break;
  }}) 