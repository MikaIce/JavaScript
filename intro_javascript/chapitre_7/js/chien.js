var chien = 
    {
        nom: "Crockdur",
        race: "mâtin de Naples",
        taille: 75,
        
        aboyer: function ()
        {
            var chienAboyer = " Grrr ! Grrr !";
            return chienAboyer;
        }
    };

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tien, un chat ! " + chien.nom + " aboie : " + chien.aboyer());