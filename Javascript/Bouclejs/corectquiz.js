const { input, select } = require('@inquirer/prompts');
const shuffle = require('shuffle-array');
const couleur = require('chalk');
const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        reponse: "paris",
    },
    {
        question: "Quelle est la capitale de la Suisse ?",
        reponse: "Berne"
    },
    {
        question: "La tomate est-elle un fruit ?",
        reponse: "Oui"
    },
    {
        question: "Que veut dire HTML ?",
        reponse: "Hyper Text Markup Language"
    },
    {
        question: "Ou se trouve le siege social de l'UE ? (Ville)",
        reponse: "Bruxelles"
    },
    {
        question : 'Quesl est le nom du premier ministre belge?',
        reponse : 'De Croo'
    },
    {
        question: 'Quel dessin animé pour enfant parle de petits homme bleu?',
        reponse : 'Stroumph'
    },
    {
        question :  'Quelle est la racine carée de 121?',
        reponse : 11
    },
    {
        question:'Quelle ville belge a pour code postal 7700?',
        reponse: 'Mouscron'
    },
    {
        question : 'Dans quel pays se trouve la ville jakarta?',
        reponse : 'Indonesie'
    },
    {
        question:'Combien Font 25/5?',
        reponse : 5
    },
    {
        question:'Qui a écris le livre 20 mille lieux sous les mère ?',
        reponse : 'Jules Vernes'
    },
    {
        question:'Quelle est la capital de la finlande?',
        reponse : 'Helsinki'
    }

];


(async function () {
 
        //Boucles
        var star = Date.now()
        let restart = true;
        while (restart == true){
             shuffle(questions);
            let score = 0;
            for (let i = 0; i < questions.length; i++) {
                const q = questions[i]
                const response = await input({ message: q.question });
                if(response.toLocaleLowerCase() === String(q.reponse).toLocaleLowerCase()) {
                    score++
                }
            }
            console.log(`${score}/${questions.length}`)
            var end = Date.now()
            var temps = (end - star) / 1000;
            console.log(couleur.cyan(` tu as un score de : ${couleur.green(`${score}/${questions.length}`)} et votre temmps est : ${couleur.yellow(`${temps}`)}`));
    
            restart = await select({
                message: 'Recommencer le questionnaire ?',
                choices: [
                    {
                        name: 'Oui',
                        value: true
                    },
                    {
                        name: 'Non',
                        value: false
                    }
                ],
            }); 
        }


})()