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
