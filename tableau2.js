//Exercice1

const semaine= ['lun','mra','mer','jeu','ven','sam','ddi'];
semaine.splice(6,1);
console.log(semaine);
semaine.push('dim');
semaine[1]='mar';
console.log('la taille du tableau est '+ semaine.length);
console.log('la 3eme valeur du tableau est ' + semaine[2]);

console.log('-----------------------------');

//Exercice2
/*Soit le tableau suivant:
const fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];
Écrire un programme qui:
Affiche la liste de fruits disponibles;
Demande au client quel fruit il désire acheter:
s’il est présent dans le tableau fruits: le retirer du tableau, et afficher ‘ok!’,
sinon, afficher ‘indisponible…’.
Affiche à nouveau la liste de fruits disponibles.*/

const{input}=require('@inquirer/prompts');
(async function(){
    const fruits = [ 'Mangue', 'Raisin', 'Figue', 'Kiwi' ];
    for(i in fruits){
        console.log(fruits[i]);
    }
    const ask = await input({message:'quel fruit voulez-vous? '});

        if(ask === fruits){
            console.log('ok');
        }else{
            console.log('indisponible');
        }
               
})()
