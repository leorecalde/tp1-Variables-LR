/* 7.- Escribe un programa que pida 3 números y escriba en la
pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande
*/

let n1 = parseInt(prompt("Escribe un número"));
let n2 = parseInt(prompt("Escribe otro número"));
let n3 = parseInt(prompt("Escribe un número"));

if (n1 > n2 && n1 > n3){
    document.write("El numero mayor es: " + n1)
}else if (n2 > n3){
    document.write("El numero mayor es: " + n2)
}else {
    document.write("El número mayor es: " + n3)
}