console.log("voici les trois mousquetaires : ");

var mousquetaires = ["Athos", "Portos", "Aramis"];

for (var i = 0; i < mousquetaires.length; i++)
    {
        console.log(mousquetaires[i])
    }

console.log("A present, ils sont quatre !");

mousquetaires.push("D'Atagnan");

mousquetaires.forEach(function (mousquetaires)
    {
        console.log(mousquetaires);
    });