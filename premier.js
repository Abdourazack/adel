const {input} = require('@inquirer/prompts');

(async function(){

    const n = await input({message : ' Saisissez un nombre?'});

    for(let i = 0; i<=n; i++){
        console.log(i);
    }
    if(n%1!=n && n%n!=0){
        console.log(n + ' ce nombre pas premier ');
    }else {
        console.log( n + ' pas premier et pas d\'affichage de n');
    }
})()