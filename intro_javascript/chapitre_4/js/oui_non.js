var ouai = prompt("Voulez-vous jouer au ni oui, ni non ?");

while ((ouai !== "oui") && (ouai !== "non"))
    {
        ouai = prompt("Voulez-vous jouer au ni oui, ni non ?");
    }
console.log("Perdu!");