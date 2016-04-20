var nbr1 = Number(prompt("Entrez votre chiffre 1 :"));
var nbr2 = Number(prompt("Entrez votre chiffre 2 :"));

if(nbr1 === nbr2)
    {
        console.log("vos chiffre sont identique.");
    }
else if (nbr1 < nbr2)
    {
        console.log(+ nbr1 + " est plus petit que " + nbr2);
    }
else if (nbr1 > nbr2)
    {
        console.log(+ nbr1 + " est plus grand que " + nbr2);
    }
else 
    {
        console.log("ce n'ai pas un chiffre !!!");
    }