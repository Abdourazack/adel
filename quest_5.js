// Entrez 3 longuer d'un triangle et selon les longueur entrez par l'utilisateur dites si:
//le traingle est isocele: 2 coté egaux
//equilateral: 3cote egaux 
//scalene: aucun coté egale

const{input}= require('@inquirer/prompts');

(async function(){

    const longueur1= await input({message :'Entrez la 1er longuer?'});
    const longueur2= await input({message :'Entrez la 2eme longuer?'});
    const longueur3= await input({message :'Entrez la 3eme longuer?'})
    
    if(longueur1==longueur2 && longueur2==longueur3){
        console.log('le triangle est equilateral');
    }else if(longueur1==longueur2 || longueur2 == longueur3 || longueur3== longueur1){
        console.log('le traingle est isocele');
    }else{
        console.log('le traingle est un scalene');
    }
})()