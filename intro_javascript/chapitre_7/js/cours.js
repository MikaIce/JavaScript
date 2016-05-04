//cours de POO :

var stylo =
    {
        type: "bille",
        couleur: "bleu",
        marque: "Bic"
    };

console.log(stylo.type);
console.log(stylo.couleur);
console.log(stylo.marque);

// autre syntaxe:

console.log(stylo['type']);
console.log(stylo['couleur']);
console.log(stylo['marque']);

console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " ecrit en " + stylo.couleur);

// modif d'objet

stylo.couleur = "rouge";
console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " ecrit en " + stylo.couleur);

// ajout d'objet

stylo.prix = 2.5;
console.log("Il coute " + stylo.prix + " euros");
