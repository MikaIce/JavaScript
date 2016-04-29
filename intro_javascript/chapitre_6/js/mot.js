function compterNbVoyelles(mot) 
{
    var nbVoyelles = 0;
    for (var i = 0; i < mot.length; i++) 
    {
        var lettre = mot[i].toLowerCase();
        if ((lettre === 'a') || (lettre === 'e') || (lettre === 'i') ||
            (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) 
        {
            nbVoyelles++;
        }
    }
    return nbVoyelles;
}

function inverser(mot) {
    var motInverse = "";

    for (var i = 0; i < mot.length; i++) 
    {
        motInverse = mot[i] + motInverse;
    }

    return motInverse;
}

function convertirEnLeetSpeek(mot) 
{
    var motLeet = "";
    for (var i = 0; i < mot.length; i++)
    {
        motLeet = motLeet + trouverLettreLeet(mot[i]);
    }
    return motLeet;
}

function trouverLettreLeet(lettre) 
{
    var lettreLeet = lettre;
    switch (lettre.toLowerCase()) {
    case "a":
        lettreLeet = "4";
        break;
    case "b":
        lettreLeet = "8";
        break;
    case "e":
        lettreLeet = "3";
        break;
    case "l":
        lettreLeet = "1";
        break;
    case "o":
        lettreLeet = "0";
        break;
    case "s":
        lettreLeet = "5";
        break;
    case "t":
        lettreLeet = "7";
        break;
    }
    return lettreLeet;
}

var motSaisi = prompt("Entrez un mot :");

var longueurMot = motSaisi.length;
console.log("Le mot " + motSaisi + " contient " + longueurMot + " caractère(s)");
console.log("Il s'écrit en minuscules " + motSaisi.toLowerCase());
console.log("Il s'écrit en majuscules " + motSaisi.toUpperCase());

var nbVoyelles = compterNbVoyelles(motSaisi);
console.log("Il contient " + nbVoyelles + " voyelle(s) et " + (longueurMot - nbVoyelles) + " consonne(s)");

var motInverse = inverser(motSaisi);
console.log("Il s'écrit à l'envers " + inverser(motSaisi));

if (motInverse.toLowerCase() === motSaisi.toLowerCase()) 
{
    console.log("C'est un palindrome");
} else 
{
    console.log("Ce n'est pas un palindrome");
}

var motLeetSpeak = convertirEnLeetSpeek(motSaisi);
console.log("Il s'écrit en leet speak " + motLeetSpeak);
