var Personnage = 
{
    // Initialise le personnage
    initPerso: function (nom, sante, force) 
    {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.inventaire = 
            {
                or: 10,
                cles: 1
            };
    },
    
    attaquer: function (cible)
    {
        if (this.sante > 0)
            {
                var degats = this.force;
                console.log(this.nom + " attaque " + cible.nom + " et lui fait " + degats + " points de degats");
                cible.sante = cible.sante - degats;
                
                if (cible.sante > 0)
                    {
                        console.log(cible.nom + " a encore " + cible.sante + " points de vie");
                    }
                else
                    {
                        cible.sante = 0;
                        console.log(cible.nom + " est mort !");
                    }
            }
        else
            {
                console.log(this.nom + " ne peut pas attaquer : il est mort...");
            }
    }
};

var Joueur = Object.create(Personnage);
// Initialise le joueur
Joueur.initJoueur = function (nom, sante, force) 
{
    this.initPerso(nom, sante, force);
    this.xp = 0;
};
// Renvoie la description du joueur
Joueur.decrire = function () 
{
    var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et " + this.xp + " points d'expérience " +
        this.inventaire.or + " piece d'or gagner et " + this.inventaire.cles + " clé obtenu";
    return description;
};

Joueur.combattre = function (adversaire)
{
  this.attaquer(adversaire);
    if (adversaire.sante === 0)
        {
           console.log(this.nom + " a tué " + adversaire.nom + " et gagne " +
            adversaire.valeur + " points d'expérience, ainsi que " +
            adversaire.inventaire.or + " pièces d'or et " +
            adversaire.inventaire.cles + " clé(s)");
        this.xp += adversaire.valeur;
     //ajout des parametre or et clee
        this.inventaire.or += adversaire.inventaire.or;
        this.inventaire.cles += adversaire.inventaire.cles;
        }
};

var Adversaire = Object.create(Personnage);
// Initialise l'adversaire
Adversaire.initAdversaire = function (nom, sante, force, race, valeur) 
{
    this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
};

var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Blazemax", 150, 30);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Benitor", 130, 10);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("Rima", 40, 40, "orc", 10);

console.log("Un affreux monstre arrive : c'est une " + monstre.race + " nommé " + monstre.nom);

monstre.attaquer(joueur1);
monstre.attaquer(joueur2);

joueur1.combattre(monstre);
joueur2.combattre(monstre);

console.log(joueur1.decrire());
console.log(joueur2.decrire());
