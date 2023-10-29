const{input}= require('@inquirer/prompts');

(async function(){

    const quote = await input({message: 'Saissisez votre note ? '});

    if(quote>= 90 && quote<= 100){
        console.log(' Votre note est : A');
    }else if (quote>= 80 && quote<=89){
        console.log('Votre note est : B');
    }else if(quote>= 70 && quote<=79){
        console.log('Votre note est : C');
    }else if(quote>= 60 && quote<=69){
        console.log('Votre note  est : D');
    }else if (quote>= 0 && quote<=59){
        console.log('Votre note est : E');
    }
})()