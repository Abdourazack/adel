//Exercice 4

//Écrire une fonction qui prend un nombre en entrée et renvoie true si le nombre est pair, et false s'il est impair.

const{input}= require('@inquirer/prompts');

(async function(){
    const nombre = await input({message : `saisissez un nombre ? `})
    const impaire = function(){
        if(nombre % 2 == 1 ){
            return true + ` ${nombre} est impaire`
        }else{
            return false + ` ${nombre} est paire`
        }
       
    } 
    console.log(impaire(nombre))
         
})()

