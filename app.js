console.log("Hola mundo"); /* no afecta usar ; 
                        pero, es una buena practica de programación*/
let numeroLimite = parseInt(prompt("Inserta el numero maximo para el rango:"));
let numeroSecreto = Math.floor(Math.random() * numeroLimite) + 1;
let numeroUsuairo;
let intentos = 1;
/* let palabraVeces = "vez"; */
let maximosIntentos = 3;
/* mientras no se cumpla se repite el juego */
while (numeroUsuairo != numeroSecreto) {
  /* prompt insertal informacion */
  /* nomenclatura camel case para variables */
  numeroUsuairo = prompt(`Dame un numero entre 1 y ${numeroLimite} :`);
  /* /* forma 1 
alert(numeroUsuairo); */

  /* forma 2: desde consola */
  console.log(numeroUsuairo);

  /* comparacion con if */

  if (numeroUsuairo == numeroSecreto) {
    alert(
      `el numero es correcto: ${numeroUsuairo}, lo hiciste en ${intentos} ${
        intentos == 1 ? "vez" : "veces"
      } `
    );
    /* si la condicion no se cuimple */
    break;
  } else {
    if (numeroUsuairo > numeroSecreto) {
      alert("el numero secreto es menor");
    } else {
      alert("el numero secreto es mayor");
    }
    /* contador incremental si el resultado es incorrecto */
    intentos++;
    /* delimitar el numero de intetos */
    if (intentos > maximosIntentos) {
      alert(
        `Limite alazando de intentos, el numero secreto era: ${numeroSecreto}`
      );
      break;
    }
    /* alert(`el numero ${numeroUsuairo} es incorrecto`); */
  }
}
