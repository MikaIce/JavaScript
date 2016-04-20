var note = Number(prompt("Entrez votre moyenne obtenu au BAC :"));

if(note < 10 )
    {
        console.log("Vous avez etais recalé!!");
    }
else if((note => 10) && (note < 12))
    {
        console.log("Reçu!! felicitation!!!");
    }
else if( note >= 12)
    {
        console.log("Felicitation, Ruçu avec mention!!")
    }
else
    {
        console.log("On vous a demander une moyenne pas un mot !!!");
    }