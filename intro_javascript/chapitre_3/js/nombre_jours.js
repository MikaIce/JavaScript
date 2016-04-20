var mois = Number(prompt("Quel mois vouler vous verifier (exprimer en chiffre de 1 a 12 ? )"));

if(mois === 1 || mois === 3 || mois === 5 || mois === 7 || mois === 8 || mois == 10 || mois === 12)
    {
        console.log("ce moi comporte 31 jours.");
    }
else if(mois === 4 || mois === 6 || mois === 9 || mois === 11)
    {
        console.log("ce moi comporte 30 jours.");
    }
else if(mois === 2)
    {
        console.log("ce moi comporte 28 jours.");
    }
else
    {
        console.log("hum!!");
    }