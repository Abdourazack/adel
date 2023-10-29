const{input}= require('@inquirer/prompts');

//Indiquez 3 nombre different puis affichez les nombres du plus petit au plus grand

(async function(){

    const nb1 = await input({message:'Donnez le 1er nombre'});
    const nb2 = await input({message:'Donnez le 1er nombre'});
    const nb3 = await input({message:'Donnez le 1er nombre'});
    
})()