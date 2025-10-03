// Para comprobar si hemos enlazado bien el archivo de JS, podemos usar la función de utilidad -> comsole.log().

console.log("Online!");

// SINTAXISIS DE JAVASCRIPT
// Suelen ser líneas de código terminadas en ;

// TIPOS DE DATOS EN JS Y VARIABLES

// Definimos una variable ->
let name = "Hugo";
let date = "2 de Octubre de 2025";

let price_1 = 2;
let price_2 = 1.5;

price_1 = 5;

let total_price = price_1 + price_2;

// Con esta función podemos ver el valor que hemos guardado en una variable
console.log(total_price);

// Declarar 3 variables y realizar resta, multiplicación y división

let price_disc = price_1 - price_2;
let price_mult = price_1 * price_2;
let price_divi = price_1 / price_2;

let total_total_price = price_disc + price_divi + price_mult;

// JS me permite hacer cosas un poco raras
let test = name + price_1;

console.log(test);

// Una situación normal en JS
let first_name = "Pepito";
let last_name = "Martínez";

let full_name = first_name + "" + last_name;

console.log(full_name);

// Comparación
console.log(price_1 > price_2);
console.log(price_1 < price_2);

let num_1 = 3;
let num_2 = "3";

console.log(num_1 == num_2);
console.log(num_1 === num_2);

// Ejemplo de array

let arr_animals = ["cat", "dog", "cow"];

console.log(arr_animals);
console.log(arr_animals[1]);

// Ejemplo de objeto de JS

let user154 = {
  name: "Hugo",
  last_name: "Spangenberg",
  age: 20,
  location: "Madrid",
  is_driver: true,
};

let product574 = {
  type: "shirt",
  style: "longsleeve",
  colors: ["#FFF", "#CCC", "#000"],
};

console.log(user154); // Accedemos al objeto completo.
console.log(user154.last_name); // Accedemos a una única clave y nos devolvería el valor que hay guardado.

// La función de utilidad alert() simplemente crea una ventanita del navegador con un mensaje.

// alert("Hola, soy un mensaje");

console.log("Último log");

// let username = window.prompt("¿Cómo te llamas?");
// alert("Hola " + username);

// FUNCIONES PROPIAS DE JS

let product01 = 12.99;
let product02 = 4.5;
let product03 = 55;
let product04 = 23.77;

// Declaración de la función
function calcTotal(param1, param2) {
  //   console.log("Este código está dentro dela función!")

  let total_price = param1 + param2;
  console.log(total_price);
}

// Llamada a la función
calcTotal(product01, product02);
calcTotal(product01, product04);
calcTotal(product02, product03);

// Función para saludar

function greeting() {
  console.log("Hola holita!");
}

// Crear una función que se llame greetUser() que haga 2 cosas:

function greetUser() {
  let username = window.prompt("¿Cómo te llamas?");
  alert("Hola " + username);
  console.log(username);
}

// Preguntar el nombre al usuario (y guardar la respuesta)

// Mostrar el nombre del usuario junto con un saludito en una ventana popup

// PISTA: la función se debe llamar desde el botón con el atributo onclick
