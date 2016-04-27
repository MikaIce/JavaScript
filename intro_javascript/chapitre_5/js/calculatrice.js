function calculer(nbr1, signe, nbr2)
{
    var resultat;
    
    switch (signe)
        {
            case "+":
                resultat = nbr1 + nbr2;
                break;
            case "-":
                resultat = nbr1 - nbr2;
                break;
            case "*":
                resultat = nbr1 * nbr2;
                break;
            case "/":
                resultat = nbr1 / nbr2;
        }
    return resultat;
}

console.log(calculer(4, "+", 6)); 
console.log(calculer(4, "-", 6)); 
console.log(calculer(2, "*", 0)); 
console.log(calculer(12, "/", 0));