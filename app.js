/* alert de hola mundo */
alert("Hola Mundo");
/* insertar un promp pedir un numero 
declaracion de variable*/
let secretNumber = 6;
let numberUser = prompt(
  "Me indicas un numero por favor entre 1 - 10 por favor"
);
/* verificar si se guardo la varibale */
alert(numberUser);
/* comparacion obligatoria */
if (numberUser == secretNumber) {
  alert(
    `es igual, el numero es: ${numberUser} `
  ); /* cadena con template string */
} else {
  /* condicional anidado */
  if (numberUser > secretNumber) {
    alert("el numero es menor");
  } else {
    alert("el numero en mayor");
  }
  alert("no es igual");
}
