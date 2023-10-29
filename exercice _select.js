console.log('--------------------------------');

//exercice 1

// demander la civilité Monsieur ou madame Switch
// age 
// quel est son navigateur préféré

const{ input} = require('@inquirer/prompts');
const{ select }= require('@inquirer/prompts');
(async function(){

    const civilite = await select({
        message: "Etes-vous : Homme ou Femme ou Autre ?",
        choices: [
            {
                name: "Homme",
                value: "Homme"
            },
            {
                name: "Femme",
                value: "Femme"
            },
            {
                name: "Autre"
            }
        ]
    });
    const response = await input({ message: "Quel age avez-vous ?" });
    age = parseInt(response,10);
    const navPref = await select({
        message: "Quel est votre navigateur prefere ?",
        choices: [
            {
                name: "Chrome",
                value: "Chrome"
            },
            {
                name: "Firefox",
                value: "Firefox"
            },
            {
                name: "Edge",
                value: "Edge"
            },
            {
                name: "Opera",
                value: "Opera"
            }
        ]
    });

    console.log('Bonjour '+ civilite + ' Votre age est ' + age + ' Ans '+ 'et Votre navigateur prefere est ' + navPref);
    
})();
