var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = 
    {
        rayon: r,
        
        perimetre: function ()
        {
            return 2 * this.rayon * Math.PI;
        },
        
        aire: function ()
        {
            return this.rayon * this.rayon * Math.PI;
        }
    };

console.log("Son perimetre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());