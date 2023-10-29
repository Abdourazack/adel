//vous avez un tableau contenant des questions, repondre à la question, passer à la question suivante
const{input}= require('@inquirer/prompts');


    (async function(){
        const questions = [
            'Couleur prefere ?',
            'Ton prenom ?',
            'Ton nom ?',
            'Ton age ?',
            'Plat prefere ?',
        ]
        let i=0;
        const tab_rep = [];
        while(i<questions.length){
            repondre = await input({ message: `${questions[i]}`});
            tab_rep.push(`${repondre}`);
            i++
        }
        console.log(tab_rep);


    console.log(`Bonjour ${tab_rep[2]} ${tab_rep[1]}, vous avez ${tab_rep[3]} ans, votre couleur prefere est le ${tab_rep[0]} et vous aimez manger ${tab_rep[4]}`)
    })()
  

