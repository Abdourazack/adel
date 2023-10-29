const{input}= require('@inquirer/prompts');

// quelle est votre taille 
// quest est votre poids
// reponse de votre IMC est :
(async function(){

    let taille = await input({message:'quelle est votre taille?'});
    const poids = await input({message:'quelle est votre poids'});
    imc = poids/(taille*taille); // IMC est c'est le poids divisé par la taille au carrée, c'est bien la taille qui est au carée)
    taille/= 100;
    /*console.log('Votre IMC est : ' + imc);*/
    if(imc < 18){
        console.log('sous poids mange une frite');
    }else if(imc>=18 && imc<=25){
        console.log('ça va encore ouf')
    }else{
        console.log('t\'es dans la merde ');
    }
})()