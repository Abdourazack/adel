const { input } = require('@inquirer/prompts');
const shuffle = require('shuffle-array');
(async function () {
    const questions = [
        'Quelle est la capital de la france?',
        'Combien font 2+2?',
        'Qui a écris le manga One Piece?',
        'Dans quel continent se trouve la l\'Allemagne?',
        'Quelle est la racine carée de 144?',
        'Quelle ville belge a pour code postal 7500?',
        'Dans quel pays se trouve la ville Minosota?',
        'Combien Font 15*5?',
        'Qui a peint la joconde?',
        'Quelle est la capital de l\'Allemagne?',
        'Quel est le code postal de la ville de Namur?',
        'Quel est le nom du président français?',
        'Quesl est le nom du premier ministre belge?',
        'Quel dessin animé pour enfant parle de petits homme bleu?',
        'Quelle est la racine carée de 121?',
        'Quelle ville belge a pour code postal 7700?',
        'Dans quel pays se trouve la ville jakarta?',
        'Combien Font 25/5?',
        'Qui a écris le livre 20 mille lieux sous les mère ?',
        'Quelle est la capital de la finlande?',
    ]

    const reponses = [
        'Paris',
        '4',
        'Eishiro Oda',
        'Europe',
        '12',
        'Tournai',
        'USA',
        '75',
        'Leonard de Vinci',
        'Berlin',
        '5000',
        'Emmanuel Macron',
        'Alexander de CROO?',
        'Les Stroumphs',
        '11',
        'Mouscron',
        'Indonesie',
        '5',
        'Jules Vernes',
        'Helsinki',
    ]

    let restart = true;
    while(restart == true){
        
    }
    let score=0;
    for(let i = 0; i<questions.length; i++){

        answer = await input({ message: `${questions[i]}`});

        if(reponses[i].toUpperCase() == answer.toUpperCase()){
            score++;
            console.log("correct");
        }else {
            console.log("incorrect");
        }
    }
    console.log(' tu as un score de : ' + score + "/" + questions.length);

  

})()