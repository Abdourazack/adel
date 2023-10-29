const{input}= require('@inquirer/prompts');

(async function(){

    const n = await input({message : "Saisissez un nombre? "});
    let somme = 0;
    for(let i = 0; i<=n; i++){
        console.log(i);
        console.log(`Nombre : ${i} ${(i%2 == 1 ? "est impair" : "")}`);
        if(i%2 == 1) {
            somme+=i;
        }
    }
    console.log(`\nLa somme total des nombres impair jusqu'a ${n} vaut ${somme}`);

    
})()