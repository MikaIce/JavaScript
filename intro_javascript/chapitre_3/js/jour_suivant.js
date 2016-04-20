var jour = prompt("Quel jour somme nous aujourd'hui ?");

if((jour === "lundi") || (jour === "Lundi")) // permet de gerer une majuscule.
    {
        console.log("Demain nous serons Mardi.");
    }
else if (jour === "mardi")
    {
        console.log("Demain nous serons Mercredi.");
    }
else if (jour === "mercredi")
    {
        console.log("Demain nous serons Jeudi.");
    }
else if (jour === "jeudi")
    {
        console.log("Demain nous serons Vendredi.");
    }
else if (jour === "vendredi")
    {
        console.log("Demain nous serons Samedi.");
    }
else if (jour === "samedi")
    {
        console.log("Demain nous serons Dimanche.");
    }
else if (jour === "dimanche")
    {
        console.log("Demain nous serons Lundi.");
    }
else
    {
        console.log("Je n'ai pas compris!!!!");
    }