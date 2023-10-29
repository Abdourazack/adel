// indidquer si un nombre est entier
//reponse 
//nombre divisible par 5
//nombre non divisible par 5

const{input}= require('@inquirer/prompts');



(async function(){
    const nombre = await input({message:'Entrer un nombre?'});

    if(parseInt(nombre) != nombre){
        console.log('ceci est pas un nombre');
        return;
    }

    if(nombre %5===0){
        console.log('alors le nombre est divisible par 5');
    }else{
        console.log('nombre non divisible par 5');
    }
})() // ne pas oublier les parenthése vers la fin

