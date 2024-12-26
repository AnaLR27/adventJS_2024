/*
Los elfos están jugando con un tren 🚂 mágico que transporta regalos. Este tren se mueve en un tablero representado por un array de strings.

El tren está compuesto por una locomotora (@), seguida de sus vagones (o), y debe recoger frutas mágicas (*) que le sirve de combustible. El movimiento del tren sigue las siguientes reglas:

Recibirás dos parámetros board y mov.

board es un array de strings que representa el tablero:

@ es la locomotora del tren.
o son los vagones del tren.
* es una fruta mágica.
· son espacios vacíos.
mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:

'L': izquierda
'R': derecha
'U': arriba
'D': abajo.
Con esta información, debes devolver una cadena de texto:

'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
'eat': Si el tren recoge una fruta mágica (*).
'none': Si avanza sin chocar ni recoger ninguna fruta mágica.
*/

/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */

function moveTrain(board, mov) {
  let filaLocomotora = board.findIndex((fila) => fila.includes("@"));
  let posicionLocomotora = board[filaLocomotora].indexOf("@");

  let nuevaFila = filaLocomotora;
  let nuevaPosicion = posicionLocomotora;

  // Determinar nueva posición según el movimiento
  if (mov === "L") {
    nuevaPosicion -= 1;
  } else if (mov === "R") {
    nuevaPosicion += 1;
  } else if (mov === "U") {
    nuevaFila -= 1;
  } else if (mov === "D") {
    nuevaFila += 1;
  }

  // Verificar si la nueva posición está fuera de los límites
  if (
    nuevaFila < 0 ||
    nuevaFila >= board.length || //limites de las filas
    nuevaPosicion < 0 ||
    nuevaPosicion >= board[nuevaFila].length // limite de las columnas
  ) {
    return "crash";
  }

  // elemento a comprobar
  let elemento = board[nuevaFila][nuevaPosicion];

  if (elemento === "*") {
    return "eat";
  } else if (elemento === "·") {
    return "none";
  } else {
    return "crash";
  }
}

const board = ["·····", "··@··", "··*··", "·····", "·····"];

console.log(moveTrain(board, "D"));
