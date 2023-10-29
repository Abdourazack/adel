const{ input}= require('@inquirer/prompts');

(async function(){

    const mois = await input({message : 'Donnez votre le mois que vous souhaitez : '});

    if(mois == 'janvier' || mois == 'mars' || mois== 'mai' || mois == 'juillet' || mois == 'aout' || mois=='octobre' || mois == 'decembre'){
        console.log('Le mois de ' + mois + ' comporte 31 jours');
    }else if ( mois == 'fevrier'){
        console.log('Le mois de ' + mois + ' comporte 28 jours');
    }else if ( mois == 'Avril' || mois == 'juin' || mois == 'septembre' || mois == 'novembre'){
        console.log (' le mois de ' + mois + ' comporte 30 jour');
    }
})()