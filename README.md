# REPASO_DWA_31

- Para ajuste de línea Alt+Z

CREAR ESTRUCTURA BÁSICA DEL HTML

- CREAR UN HEADER (DENTRO DEL HEADER UN H1), UN NAV, UN MAIN (DENTRO DE MAIN 3 SECTION) Y UN FOOTER
- HACER UN COMMIT -> BASIC HTML

        <meta name="viewport" content="width=device-width, initial-scale=1.0">

Esta etiqueta <meta> es indispensable si vamos a crear una web responsive

CSS

El selector universal \* -> selecciona todos los elementos del HTML.

MODELO DE CAJAS DE HTML Y CSS

Todos los elementos de HTML son cajas y estas tienen diferentes propiedades como padding, border y margin (contando desde dentro hacia fuera de la caja).

- Crear un selector que SOLO afecte al p que hay dentro del header, cambiar colo y tamaño.

SELECTORES COMBINADOS DE CSS:

header > p -> selecciona todos los elementos p que son hijos directos de header

header p -> selcciona todos los p que son hijos de un header a cualquier nivel (puede haber un p dentro de un div)

TAREAS A REALIZAR:

Centrar todo el texto del header.

Convertir el nav y ul y li, en un menu horizontal CENTRADO. Los enlaces que no aparezcan en azul (ponerlos en negrita) y que tampoco esten subrayados.

Un efecto hover sobre cada una de las opciones de menú. Cambia de color el fondo de cada opcion generando una caja con los bordes redondeados. Se invierten los colores del fondo de la cajita y del texto.

## VARIABLES DE CSS:

Las declaramos al principio del archivo de CSS en la psuedo-clase :root {}, los nombre deben comenzar con --nombre-de-variable

Llamamos o invocamos con la función var(--valor)

Las variables pueden contener cualquier valor (colores, tamaños, etc...)

## PSEUDO-CLASES

div:first-child
div:last-child
div:nth-child(5)

## FLEXBOX

Guía definitiva de Flexbox -> https://css-tricks.com/snippets/css/a-guide-to-flexbox/

El flex-direction tiene como valor default -> row

\*\*25/09/2025

Centrar los elementos del div con la clase content-text en el eje vertical. Con flexbox, si claro.

\*\*26/09/2025

Para la sección #prices ->

Buscar referencias de cards para precios (de un servicio o app) como mínimo.

Deben incluir un nombre o titulo del precio, el propio precio, un icono, y un botón (no hace falta que sea el elemento <button>)

JAVASCRPT:

Es un lenguaje de programación, el más usado en el mundo. Javascript es el único lenguaje de programación que funciona en la parte del cliente (front-end).

Es el único lenguaje de programación que entiende el navegador web, que es por otro lado, el que ejecuta el código de 35.

Tenemos varias formas de cargar código de 35 en nuestra web (dentro de los archivos de HTML).

- Dentro del <head></head> del HTML.
- Dentro del <body></body>, justo antes de que se cierre la segunda etiqueta.

Podemos cargar en nuestra web archivos propios de JS o archivos externos online.

Cuando escribimos código de JS al final de cada línea debemos añadir un (;)

VARIABLES DE JS:

Son entidades que me permiten guardar valores. Tenemos 3 tipos:

- var
- let
- const

En var y let guardamos valores y los podemos modificar, en const podemos guardar un valor pero este no se puede modificar una vez asignado.

Cuando declaramos una variable por primera vez debemos usar antes la palabra let (o var o const)

TIPOS DE DATOS DE JS:

- Texto (string) -> texto (letras), números, símbolos especiales pero siempre dentro de las comillas. Las comillas pueden ser dobles o simples.

- Números (number) -> números sin comillas. Para los números decimales se usa un punto.

Con estos números podemos realizar distintas operaciones:

- Suma -> +
- Resta -> -
- Multiplicación -> \*
- División -> /
- Módulo -> % (el resto de la división)

- Mayor que... -> (>)
- Menor que... -> (<)
- Mayor o igual que... -> (>=)
- Menor o igual que... -> (<=)
- Igual que... -> (==)
- Totalmente igual que... -> (===) Es más estricto y se recomienda su uso para evitar errores.

Estas operaciones dan como resultado un tipo de dato especial que se llama boolean (true or false)

- Boolean (bool) -> true or false

. Arrays (lista) -> se trata de un tipo de dato complejo que me permite guardar una lista o colección de otros tipos de datos. Estos pueden ser todos de un mismo tipo o de diferentes tipos. -> []

Javascript empieza a contar desde 0

- Objeto -> es un tipo de dato complejo que me permite guardar de forma ordenada (clave: valor) y acceder a estos datos una vez declarados.

- nul y undefined

## FUNCIONES DE JAVASCRIPT

Las funciones o métodos son un conjunto de líneas de código que cumplen un trabajo determinado.

Las funciones trabajan como una "caja negra" cuando son funciones ya definidas en el "core" del lenguaje, pero también tenemos la posibilidad de definir nuestras propias funciones.

Por esto podemos decir que tenemos 2 tipos de funciones:

- Las funciones de JS ya definidas dentro del propio código interno del lenguaje, las cuales nosotros podremos llamar y usar. Por ejemlo las funciones alert() y log() son funciones de este tipo que se conocen como built-in.

- Las funciones que nosotros mismos definimos en nuestro código. JS nos permite definir tantas funciones como queramos y usarlas tantas veces como necesitemos.

Estas funciones se declaran (crean) una sola vez en nuestro código y luego las podemos usar tantas veces como queramos.

Para crear y usar una función propiavamos a seguir estos pasos:

1. Declaramos la función propia con la palabra reservada: function

2. Le damos un nombre a esta nueva función. El nombre lo decidimos nosotros y debe representar de forma clara el trabajo que lleva a cabo dicha función. El nombre de esta función incluye al final (y pegado) unos paréntesis. Detrás de los paréntesis abrimos llaves {}

3. Dentro de las llaves escribiremos el código interno de la función.

4. Cuando queramos usar la función la llamaremos o invocaremos por su nombre.

Los datos pueden entrar dentro de una función como parámetros en los paréntesis. Los parámetros se introducen en la función en el momento de la llamada.
