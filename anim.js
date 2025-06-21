// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "My love, will you", time: 20 },
  { text: "Take my hand with virtue?", time: 25 },
  { text: "For time has proved", time: 31 },
  { text: "That I, do love you", time: 37 },
  { text: "Will we ever find", time: 42 },
  { text: "A way to make our time last forever?", time: 47 },
  { text: "Because I begin to miss you", time: 56},
  { text: "One kiss from you", time: 86 },
  { text: "And your touch will change", time: 92 },
  { text: "My life and my blue", time: 98 },
  { text: "As long as you stay", time: 102 },
  { text: "Will we ever find", time: 108 },
  { text: "A way to make our time last forever?", time: 113 },
  { text: "Because I begin to miss you", time: 121 },
  { text: "Will we ever find", time: 129 },
  { text: "A way to make our time last forever?", time: 134},
  { text: "Because I begin to miss you", time: 141 },
  { text: "Will we ever find", time: 152 },
  { text: "A way to make our time last forever?", time: 157 },
  { text: "Because I begin to miss you", time: 166 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 5
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);