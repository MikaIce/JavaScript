var chien =
    {
        init: function (nom, race, taille)
        {
            this.nom = nom;
            this.race = race;
            this.taille = taille;    
        },
            
        aboyer: function ()
        {
            var aboie = "Whouaf ! Whouaf !";
            if (this.taille < 25)
                {
                    aboie = "kaii ! kaii !";
                }
            else if (this.taille > 60)
                {
                    aboie = "Grr ! Grr !";
                }
            return aboie;
        }
    };
        
var crokdur = Object.create(chien);
crokdur.init("Crokdur", "mâtin de Naples", 21);
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(chien);
pupuce.init("Pupuce", "bichon", 100);
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());
