const{ input} = require('@inquirer/prompts');


/*(async function(){

    const reponse = await input({ message : 'Quest est votre age?'});

    const age = parseInt(reponse, 10);
    if (age >= 18) {
        console.log('vous etes majeur vous avez : ', age);
    } else {
        console.log('vous etes mineur vous avez : ', age);
    }



})() */

/*console.log('message 1')

input({message : 'Enter your name:'});

console.log('message 2');*/

console.log('--------------------------------');

//exercice 1

// demander la civilité Monsieur ou madame Switch
// age 
// quel est son navigateur préféré



(async function(){

    const reponse = await input({message : 'quelle est votre civilité ?'});

    const reponse1 = await input({ message : 'Quest est votre age?'});

    const reponse2 = await input({ message : 'Quel est votre navigateur preferé?'});

    const age = parseInt(reponse1, 10);

    console.log('Bonjour, ' + reponse + 'Vous avez ' + age + ' ans et votre navigateur preferer est : ' + reponse2);
    
   

})() 
