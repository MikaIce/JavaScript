function perimetre(rayon)
{
    return 2 * rayon * Math.PI;
}

function aire (rayon)
{
    return Math.pow(rayon, 2) * Math.PI;
}

var nbr = Number(prompt("Entrez le rayon d'un cercle :"));
console.log("Son périmètre vaut " + perimetre(nbr));
console.log("Son aire vaut " + aire(nbr));