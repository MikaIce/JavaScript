var nbr = Number(prompt("saisir une nombre :"));


for (var i = nbr; i < nbr + 10; i++)
    {
        if(i % 2 === 0)
            {
                console.log(i + " est pair");
            }
        if(i % 2 === 1)
            {
                console.log(i + " est impair");
            }
    }