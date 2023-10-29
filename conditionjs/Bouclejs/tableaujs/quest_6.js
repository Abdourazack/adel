const{input}= require('@inquirer/prompts');
const{ select }= require('@inquirer/prompts');

// nombre 1
//nombre 2
//nombre 3

// retouner le resultat selon l'operation
//une une fois le resultat selon l'operation trouvé retourner le carrée de chaque opération


(async function(){

    const nombre1 = await input({message: 'Entrez le 1er nombre : '});
    const nombre2 = await input({message: 'Entrez le 2eme nombre : '});

    const nb1 = parseFloat(nombre1);
    const nb2 = parseFloat(nombre2);
    const operation = await select({
        message: "Choississez votre operateur?",
        choices: [
            {
                name: "addition",
                value: "+"
            },
            {
                name: "soustraction",
                value: "-"
            },
            {
                name: "multiplication",
                value:"*"
            },
            {
                name: "division",
                value: "/"
            }
        ]
    });

    if(operation == '+' ){
        console.log('L\'addition des 2 nombre au carre est : ' +(nb1+nb2)**2);
    }else if (operation == '-'){
        console.log('La soustraction des 2 nombre au carre est : '+ (nb1-nb2)**2);
    }else if(operation == '*'){
        console.log('La multiplication des 2 nombre au carre est : '+ (nb1 *nb2)**2);
    }else if(operation == '/'){
        console.log('La division des 2 nombre au carre est : '+ (nb1/nb2)**2);
    }else{
        console.log('Aucun operateur renter!! ');
    }

})()


