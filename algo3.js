const{input}= require('@inquirer/prompts');
const{select}= require('@inquirer/prompts');

(async function (){

    const poids = await input({message :'Quel est le poid de votre colis? '});
    const prix = 5 +(poids*2);
    const prix1= 10 + (poids*4);
    const prix2= 10 + (poids*3);
    const prix3= 15 + (poids*10);
    const prix4= 15 +(poids*7);
    const zone = await select({
        message: "Choississez votre Zone d\'envoie? ",
        choices: [
            {
                name: "Local",
                value: "local"
            },
            {
                name: "National",
                value: "national"
            },
            {
                name: "International",
                value:"international"
            }
        ]
    });
    
    if(zone == 'local'){
        console.log('Le prix de l\'envoie est : ' + prix + '£');
    }else if(zone == 'national' && poids<10){
        console.log('Le prix de l\'envoie est : ' + prix1 + '£');
    }else if(zone == 'national'){
        console.log('Le prix de l\'envoie est : ' + prix2 + '£');
    }else if(zone == 'international' && poids<5){
        console.log('Le prix de l\'envoie est : ' + prix3 + '£');
    }else if( zone == 'international'){
        console.log('Le prix de l\'envoie est : ' + prix4 + '£');
    }
})()