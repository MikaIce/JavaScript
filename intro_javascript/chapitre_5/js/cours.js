// premiere fonction : appel d'une fonction

function direBonjour()
{
    console.log("bonjour !");
}

console.log("Début du programme");
direBonjour();
console.log("Fin du programme");

// deuxieme fonction : appel d'une fonction avec un return

function direBonjour2()
{
    return "Bonjour !!";
}

console.log("Début du programme");
var resultat = direBonjour2();
console.log(resultat);
console.log("Fin du programme");

// fonction 3 : appel d'une fonction avec un return

function direBonjour3()
{
    return "Bonjour !!!";
}

console.log(direBonjour3());

// fonction 4 : appel d'une fonction avec une variable local

function direBonjour4()
{
    var message = "Bonjour !!!!";
    return message;
}

console.log(direBonjour4());

// fonction 5 : Exemple de var local fausse
/*
function direBonjour5()
{
    var message1 = "Bonjour !!!!!";
    return message1;
}

console.log(direBonjour5());
console.log(message1);
*/

//fonction 6 :

function direBonjour6(prenom)
{
    var message1 = "Bonjour, " + prenom + " !!!!!!";
    return message1;
}

console.log(direBonjour6("Beni"));
console.log(direBonjour6("Blazounet"));

//TQ :

function soustraction(nbr1, nbr2)
{
    return nbr2 - nbr1;
}

console.log(soustraction(5, 7));