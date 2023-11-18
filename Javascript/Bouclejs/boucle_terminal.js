//demander une question en boucle à l'utilisateur
//demander au script votre prenom, le script redemande indéfiniment jusquà ce qu'on mette un autre prenom

const{input}= require('@inquirer/prompts');

(async function(){
    
    let prenom;
    while (prenom != 'ADEL') {
        prenom = await input({ message: "Indique ton prenom :" });
        prenom = prenom.toUpperCase();
    }
})()