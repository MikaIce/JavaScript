var multi = 0;

while ((multi < 2) || (multi > 10))
    {
        multi = Number(prompt("Entrez un nombre entre 2 et 9 :"));
    }

console.log("Voici la table de : " + multi);

for (var i = 1; i <= 10; i++)
            {
                console.log(multi + " X " + i + " = " + (multi * i));
            }