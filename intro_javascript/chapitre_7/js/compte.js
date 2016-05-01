var compte = 
    {
        titulaire: "Alex",
        solde: 0,
        
        crediter: function(cash)
        {
            this.solde = this.solde + cash;
        },
        debiter: function(cash)
        {
            this.solde = this.solde - cash;
        },
        decrire: function()
        {
            var description = "Titulaire : " + this.titulaire + ", solde : " + this.solde + " euros";
            return description;
        }
    };

console.log(compte.decrire());
var credit = Number(prompt("Entrez le momtant a crediter : "));
compte.crediter(credit);
var debit = Number(prompt("Entrez le montant a debiter : "));
compte.debiter(debit);
console.log(compte.decrire());