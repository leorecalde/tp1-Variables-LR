/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande
*/

let n1 = parseInt(prompt("Escribe un número"));
let n2 = parseInt(prompt("Escribe otro número"));

if (n1 > n2){
    document.write("El numero mayor es: " + n1)
}else{
    document.write("El numero mayor es: " + n2)
}