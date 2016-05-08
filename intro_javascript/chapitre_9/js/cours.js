var films = ["Terminator", "Terminator II", "Terminator III"];

console.log(films.length);

console.log(films[0]);
console.log(films[1]);
console.log(films[2]);

var films = ["Fast & furious", "Fast & furious II", "Fast & furious III"];

for (var i = 0; i < films.length; i++)
    {
        console.log(films[i]);
    }

var films = ["Star Wars I", "Star Wars II", "Star Wars III"];

films.forEach(function (film)
    {
              console.log(film);
    });

var films = ["DBZ", "Naruto", "Bleach"];

films.push("SAO");

console.log(films[3]);

var films = 
    {
        init: function (titre, annee)
        {
            this.titre = titre;
            this.annee = annee;
        },
        
        decrire: function ()
        {
            var description = this.titre + " (" + this.annee + ")";
            return description;
        }
    };

var film1 = Object.create(films);
film1.init("Le loup de wall street", 2013);

var film2 = Object.create(films);
film2.init("Vice Versa", 2015);

var film3 = Object.create(films);
film3.init("Babysitting", 2013);

var video = [];
video.push(film1);
video.push(film2);
video.push(film3);

video.forEach(function (film)
    {  
        console.log(film.decrire());
    });