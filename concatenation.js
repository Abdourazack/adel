// Exercice 1
/*
let prenom = 'Samuel';
let nom = 'LASSOIE';
console.log('Bonjour, ' + prenom + ' ' + nom);

// EXERCICE 2

let a = '5';
let b = 3 ;
let texte = '2';
console.log(a + b + texte);

//Exercice 3 (Litteraux de gabarit)

let prenom1 = 'john';
let nom1 = 'DOE'
console.log(`Mon prenom est ${prenom1} et mon nom est ${nom1} \n`);


//Exercice 4

let nom2 = 'ABDOURAZACK HARED';
let rue = 'Quai notre dame, 18';
let ville = 'Tournai';
let code_postal= 7500;
let pays = 'Belgique';
console.log(nom2 + ' \n '+ rue +' \n ' + ville +' \n ' + code_postal +' \n ' + pays +'\n');

// Exercice 5

let liste_animaux = ['chat', 'chien', 'lapin', 'possoin'];
console.log('Avez-vous un ' + liste_animaux[0] + ' ?'+'\n');
console.log('Avez-vous un ' + liste_animaux[1] + ' ?'+'\n');
console.log('Avez-vous un ' + liste_animaux[2] + ' ?'+'\n');
console.log('Avez-vous un ' + liste_animaux[3] + ' ?'+'\n');
*/
console.log('------------------------');

//  exemple cour

const message1 = 'hello';
const message2 = 'world';
console.log(message1 + ' '+ message2 + '\n');

const message3= 'hello';
const message4 = 'world';
let message = message3.concat(' ').concat(message4);
console.log(message);

console.log('------------------------');

const m1= 'salut';
const m2 = 'tout le monde ';

m1.concat(m2)
console.log(m1);
console.log(m2);

console.log('------------------------');
// template  litteral

const message5= 'hello';
const message6 = 'world';

console.log(`ceci est le premier message : ${message5} et celui la le deuxieme : ${message6} \n`);
console.log('------------------------');

//Exercice 1
 
const prenom1 = 'adel';
const nom= 'Lassoie '

console.log('------------------------');

let nom2 = 'ABDOURAZACK HARED';
let rue = 'Quai notre dame, 18';
let ville = 'Tournai';
let code_postal= 7500;
let pays = 'Belgique';
const adresse = `${nom2}
${rue}
${ville}
${code_postal}
${pays}
`
console.log(adresse);