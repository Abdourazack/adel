// Type de Variable 

const message = ' hello la team';
console.log(typeof message);

const nb = 10;
console.log(typeof nb);

const vrai = true;
console.log(typeof vrai);

// declarer une variable prenom 1 où vous allez stocker votre prénom
// créer une variable prenom2 où vous allez y stocker la valeur de votre prénom
// venant de la première variable
// imprimez à l'ecran le contenu de la variable prenom2
// imprimer la deuxieme

const prenom1 = 'adel';
const prenom2 = prenom1;
console.log(prenom2);
console.log(prenom2[1]);

// Exercice 2 

// inverser les valeurs les des variables nb1 et nb2

/*let nb1 = 10;
let nb2 = 15;
const nb3 = nb2;
nb2 = nb1;
nb1 = nb3;*/



/*console.log('nb1 = ' + nb1 + ' , nb2 = ' + nb2);*/

/*console.log(nb1);
console.log(nb2);*/

// Exercice 3 

// nb1 => nb4
// nb2 => nb3
// nb3 => nb1
// nb4 => nb2

/*let nb1 = 10;
let nb2 = 15;
let nb3 = 26;
let nb4 = 38;
const temp1 = nb1;
const temp2 = nb2;

nb1 = nb4;
nb2 = nb3;
nb3 = temp1;
nb4 = temp2;*/

let nb1 = 10;
let nb2 = 15;
let nb3 = 26;
let nb4 = 38;
const temp = nb4;

nb2 = nb4;
nb2 = nb3;
nb3 = nb1;
nb1 = temp;

console.log( nb1, nb2 ,nb3,nb4);