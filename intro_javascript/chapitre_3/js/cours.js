var meteo = prompt("Quel temps fait-il dehors ?");
if (meteo === "soleil")
    {
        console.log("Sortez en t-shirt.");
    }
else if(meteo === "vent")
    {
        console.log("Sortez en pull.");
    }
else if(meteo === "pluie")
    {
        console.log("sortez en blouson.");
    }
else if (meteo === "neige")
    {
        console.log("ne sortez pas")
    }
else
    {
        console.log("je n'ai pas compris !");
    }