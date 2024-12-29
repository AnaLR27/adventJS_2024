/*
Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe representar los datos del objeto de la siguiente manera:

Tiene una cabecera con el nombre de la columna.
El nombre de la columna pone la primera letra en mayúscula.
Cada fila debe contener los valores de los objetos en el orden correspondiente.
Cada valor debe estar alineado a la izquierda.
Los campos dejan siempre un espacio a la izquierda.
Los campos dejan a la derecha el espacio necesario para alinear la caja.
Mira el ejemplo para ver cómo debes dibujar la tabla:

drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
*/
function drawTable(data) {
  // Obtener las claves de los objetos para las cabeceras de la tabla
  const cabecera = Object.keys(data[0]);
  // calcular la palabra más larga
  const widthCols = cabecera.map((key) =>
    Math.max(
      key.length,
      ...data.map((objeto) => String(objeto[key] ?? "").length)
    )
  );

  // poner en mayuscula
  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  // Función para alinear texto a la izquierda con espacios a la derecha
  const padText = (text, width) => text + " ".repeat(width - text.length);

  // separador
  let separador =
    "+" + widthCols.map((width) => "-".repeat(width + 2)).join("+") + "+";

  // cabecera
  const encabezado =
    "| " +
    cabecera
      .map((key, i) => padText(capitalize(key), widthCols[i]))
      .join(" | ") +
    " |\n";

  // filas de datos
  const filas = data
    .map(
      (elemento) =>
        "| " +
        cabecera
          .map((key, indice) =>
            padText(String(elemento[key]), widthCols[indice])
          )
          .join(" | ") +
        " |\n"
    )
    .join("");

  // Construir la tabla completa
  const tabla =
    separador + "\n" + encabezado + separador + "\n" + filas + separador;
  return tabla;
}

console.log(
  drawTable([
    { name: "Alice", city: "London" },
    { name: "Bob", city: "Paris" },
    { name: "Charlie", city: "New York" },
  ])
);
