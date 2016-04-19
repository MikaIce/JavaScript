var prix = Number(prompt("Entrez le prix : "));

var tva = 19.6;

var TTC = prix * tva / 100 + prix;

console.log("Le prix TTC est de " + TTC + " euros");