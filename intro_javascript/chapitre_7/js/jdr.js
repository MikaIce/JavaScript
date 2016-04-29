// V.1

var perso =
    {
        nom: "Blazmax",
        sante: 150,
        force: 25,
        xp: 0,
        
        decrire: function ()
        {
            var description = this.nom + " a " + this.sante + " points de vie et " + this.force + " en force et a " + this.xp + " XP ";
            return description;
        }
    };

console.log(perso.decrire());

perso.sante = perso.sante - 20;

perso.force = perso.force + 10;

perso.xp = perso.xp + 15;

console.log(perso.decrire());

// V.2

var perso = {};
perso.nom = "Benitor";
perso.sante = 200;
perso.force = 30;
perso.xp = 0;

perso.decrire = function ()
{
    var description = this.nom + " a " + this.sante + " points de vie et " + this.force + " en force et a " + this.xp + " XP "; 
    return description;
};

console.log(perso.decrire());

perso.sante = perso.sante - 20;

perso.force = perso.force + 10;

perso.xp = perso.xp + 15;

console.log(perso.decrire());