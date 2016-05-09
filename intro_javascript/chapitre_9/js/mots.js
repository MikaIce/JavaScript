var mots = [];

var saisiMot = "";
while ((saisiMot !== "stop") && (saisiMot !== "Stop"))
    {
        saisiMot = prompt("entrez un mot ou taper stop pour arreter :");
        
        if ((saisiMot !== "stop") && (saisiMot !== "Stop"))
            {
                mots.push(saisiMot);
            }
    }

mots.forEach(function (saisiMot)
    {
        console.log(saisiMot);
    });