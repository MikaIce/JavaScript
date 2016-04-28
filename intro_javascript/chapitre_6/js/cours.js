//1.Obtenir la longueur de la chaine :

console.log("ABC".length);
console.log("Je suis une chaine".length);

var mot = "Kangourou";
var longueurMot = mot.length;
console.log(longueurMot);

//2.majuscule minuscule :

var motInitial = "Bora-Bora";
var motEnMinuscules = motInitial.toLocaleLowerCase();
console.log(motEnMinuscules);
var motEnMajuscules = motInitial.toLocaleUpperCase();
console.log(motEnMajuscules);

//3.comparaison

var chaine = "azerty"
console.log(chaine === "azerty");
console.log(chaine === "qwerty");

console.log("Azerty" === "azerty");

var valeurSaisie = "Quitter";
console.log(valeurSaisie === "quitte");
console.log(valeurSaisie.toLocaleLowerCase() === "quitter");

//4.Acceder a un carractere : 

var sport = "tennis-ballon";
console.log(sport.charAt(0));
console.log(sport[0]);
console.log(sport.charAt(6));
console.log(sport[6]);

var longueurSport = sport.length;
console.log(sport[longueurSport - 1]);
// console.log(sport(longueurSport));

//5.parcourrir une chaine

var prenom = "Odile";
console.log(prenom[0]);
console.log(prenom[1]);
console.log(prenom[2]);
console.log(prenom[3]);
console.log(prenom[4]);

var prenom2 = "Odile";
for (var i =0; i < prenom2.length; i++)
    {
        console.log(prenom[i]);
    }
