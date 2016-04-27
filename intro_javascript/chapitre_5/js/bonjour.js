function direBonjour(prenom, nom)
{
    var message = "Bonjour, " + prenom + " " + nom + " !";
    return message;
}

var prenom = prompt("Entrez votre Prénom : ");
var nom = prompt("Entrez votre Nom : ");

console.log(direBonjour(prenom, nom));