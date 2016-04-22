/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var essai = 1;
while ((essai <= 6) && (nombre !== solution))
    {
        var nombre = Number(prompt("Entrez un nombre entre 1 et 100 :"));
        
        if(nombre > solution)
            {
                console.log(nombre + " est plus grand");
            }
        else if(nombre < solution)
            {
                console.log(nombre + " est plus petit");
            }   
        
        else if(nombre === solution)
            {
                console.log("Bravo tu as trouvé en " + essai + " coups ---> " + solution);
            }
        essai++;
    }    
        
    if(nombre !== solution)
        {
            console.log("Perdu le chiffre etais ---> " + solution);
        }