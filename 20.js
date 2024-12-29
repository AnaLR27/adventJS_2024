/*
Santa Claus 🎅 está revisando la lista de regalos que debe entregar esta Navidad. Sin embargo, algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas. Necesita tu ayuda para resolver el problema.

Recibirás dos arrays:

received: Lista con los regalos que Santa tiene actualmente.
expected: Lista con los regalos que Santa debería tener.
Tu tarea es escribir una función que, dado received y expected, devuelva un objeto con dos propiedades:

missing: Un objeto donde las claves son los nombres de los regalos faltantes y los valores son las cantidades que faltan.
extra: Un objeto donde las claves son los nombres de los regalos extra o duplicados y los valores son las cantidades que sobran.
Ten en cuenta que:

Los regalos pueden repetirse en ambas listas.
Las listas de regalos están desordenadas.
Si no hay regalos que falten o sobren, las propiedades correspondientes (missing o extra) deben ser objetos vacíos.
fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
)
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
*/

/**
 * @typedef {{ missing: GiftsCount, extra: GiftsCount }} Result
 */

/**
 * @param {string[]} received
 * @param {string[]} expected
 * @returns {Result}
 */
function fixGiftList(received, expected) {
  let resultado = {
    missing: {},
    extra: {},
  };

  let recibidos = [...received];
  let esperados = [...expected];

  // recorremos los recibidos
  for (const element of received) {
    // vamos buscando si está en los esperados, si es así, lo quitamos
    if (esperados.includes(element)) {
      esperados.splice(esperados.indexOf(element), 1);
    } else {
      // el que no esté en la lista de esperado, es que sobra
      if (!resultado.extra[element]) {
        resultado.extra[element] = 0;
      }
      resultado.extra[element]++;
    }
  }

  // hacemos lo mismo con la otra lista
  for (const element of expected) {
    if (recibidos.includes(element)) {
      recibidos.splice(recibidos.indexOf(element), 1);
    } else {
      if (!resultado.missing[element]) {
        resultado.missing[element] = 0;
      }
      resultado.missing[element]++;
    }
  }

  return resultado;
}

console.log(
  fixGiftList(
    ["book", "train", "kite", "train"],
    ["train", "book", "kite", "ball", "kite"]
  )
);
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

console.log(
  fixGiftList(
    ["bear", "bear", "car"],
    ["bear", "car", "puzzle", "bear", "car", "car"]
  )
);
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

console.log(fixGiftList(["bear", "bear", "car"], ["car", "bear", "bear"]));
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
