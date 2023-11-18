const{input}= require('@inquirer/prompts');
const{ select }= require('@inquirer/prompts');

(async function(){

    const nom= await input({message: ' saisisser votre nom ? '});
    const prenom = await input({message : 'saisissez votre prenom'});
    let quote = await input({message: 'Saisissez votre quote ?'});
    let note = parseFloat(quote);
    const sexe = await select({
        message: "Choississez votre sexe ?",
        choices: [
            {
                name: "Homme",
                value: "Monsieur"
            },
            {
                name: "Femme",
                value: "Mademoiselle"
            }
        ]
    });

        if(quote>= 16 && quote<=20){
            console.log(sexe + ' ' + nom+ ' ' + prenom+ ' Votre quote est : ' + quote +' et cela est excellent continuez ainsi');
        }else if (quote>= 12 && quote<=15){
            console.log(sexe + ' ' + nom + ' '+ prenom+ ' Votre quote est : ' + quote + 'et cela et bien continuez ainsi');
        }else if(quote>= 10 && quote<=11){
            console.log(sexe+ ' ' + nom + prenom+  ' Votre quote est : ' + quote + ' et cela est moyen');
        }else{
            console.log(sexe + ' '+ nom+ ' ' + prenom+ ' Votre quote est inferieur a la moyenne elle est de : ' + quote + ' vous devez repassez');
        }
            

        })()
    