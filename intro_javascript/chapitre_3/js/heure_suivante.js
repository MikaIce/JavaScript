var heure = Number(prompt("Entrez votre heure :"));
var minute = Number(prompt("Entrez vos minutes :"));
var seconde = Number(prompt("Entrez vos secondes :"));

if((heure >= 0) && (heure <= 23) && (minute >= 0) && (minute <=59) && (seconde >= 0) && (seconde <= 59))
    {
        seconde++;
        
        if(seconde === 60)
            {
                seconde = 0;
                minute++;
                
                if(minute === 60);
                {
                    minute = 0;
                    heure++;
                    
                        if(heure === 24)
                            {
                                    heure = 0;
                            }

                }
            
            }
        console.log("Dans une seconde il sera " + heure + " h " + minute + " m " + seconde + " s ");
    }
    else
        {
            console.log("mauvaise heure!!")
        }