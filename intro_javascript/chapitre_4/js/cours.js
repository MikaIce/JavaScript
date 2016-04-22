/*

//boucle while :

console.log("Début du programme");
var nombre = 1;
while (nombre <= 5)
    {
        console.log(nombre);
        nombre++;
    }
console.log("Fin du programme");

*/

/*

//boucle for :

console.log("Début du programme");
//var compteur; peut etre ecris dans la boucle.
for (var compteur = 1; compteur <= 5; compteur++)
    {
        console.log(compteur);
    }
console.log("Fin du programme");

*/

/*
var lettre = "";
while (lettre !== "X")
    {
        lettre = prompt("Tapez une lettre ou x pour sortir :");
        console.log(lettre);
    }
*/

var lettre = "";
for (; lettre !== "X";)
    {
        lettre = prompt("Tapez une lettre ou X pour sortir :");
        console.log(lettre);
    }