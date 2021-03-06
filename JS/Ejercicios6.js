//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
console.log("%cEjercicio 18", "font-weight:bold; font-size:12px");
const contadorVocales = (texto = "") => {
  if (texto === "" || !texto) return console.warn("Escribe un texto.");
  if (typeof texto !== "string")
    return console.error(
      "Has insertado un número, objeto o array. Por favor introduce un texto."
    );
  if (texto.match(/[0-9.]/g))
    return console.error(
      "Has escrito un número o caracter especial en el string, inserta un texto."
    );

  let vocales = new RegExp("[aeiou]", "ig");
  let consonantes = new RegExp("[^aeiou]", "ig");

  let textoSinEspacios = texto.replace(/\s+/g, "");
  let numeroVocales = textoSinEspacios.match(vocales).length;
  let numeroConsonantes = textoSinEspacios.match(consonantes).length;

  console.log(
    `El nombre ${texto}, tiene ${numeroVocales} vocales y ${numeroConsonantes} consonantes.`
  );
};

contadorVocales("Hola Mundo");

//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan Mircha") devolverá verdadero.
console.log("%cEjercicio 19", "font-weight:bold; font-size:12px");
const validadorNombre = (texto = "") => {
  if (texto === "" || !texto) return console.warn("Escribe un nombre.");
  if (typeof texto !== "string")
    return console.error(
      "Has insertado un número, objeto o array. Por favor introduce un nombre."
    );
  if (texto.match(/[0-9.]/g))
    return console.error(
      "Has escrito un número o caracter especial en el string, inserta un nombre."
    );

  let nombre = new RegExp(
    /^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/
  );

  let nombreValido = nombre.test(texto);

  nombreValido
    ? console.info(`%cEl nombre ${texto} es válido.`, "color:green")
    : console.warn(`El nombre ${texto} es inválido intente con otro nombre.`);
};

validadorNombre("Jonathan Mircha");

//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
console.log("%cEjercicio 20", "font-weight:bold; font-size:12px");
const validadorEmail = (texto = "") => {
  if (texto === "" || !texto) return console.warn("Escribe un nombre.");
  if (typeof texto !== "string")
    return console.error(
      "Has insertado un número, objeto o array. Por favor introduce un nombre."
    );

  let email = new RegExp(
    /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/
  );

  let emailValido = email.test(texto);

  emailValido
    ? console.info(`%cEl email ${texto} es válido.`, "color:green")
    : console.warn(
        `El email ${texto} es inválido, escriba correctamente su email.`
      );
};

validadorEmail("jonmircha@gmail.com");

console.log(
    "%c6ta Ronda de ejercicios hecha, gracias Jon, hecho por Codereggs",
    "color:lightblue; font-size:20px"
  );
  