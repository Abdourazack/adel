// Cour Condition


let age = 18

if (age > 18) {
    console.log('vous etes majeur !!!');
} else if (age === 18) {
    console.log('vous etes tout juste majeur!!!')
} else {
    console.log('vous etes mineur!!!!');
}


console.log('--------------------------------');

// EXERCICE 1

// 10 tres tres tres bien
//7-9 tres bien 
// 5-6 limite !
//  en dessous pas terrible 

const note = 2;

if(note>=10){
    console.log('tres tres tres bien!!!');
}else if(note>=9){
    console.log('tres bien')
}else if(note>=7){
    console.log('tres bien')
}else if(note>=6){
    console.log('limite')
}else if(note>=5){
    console.log('limite')
}
else{
    console.log('pas terrible')
}

console.log('--------------------------------');

// Exemple swtich

const date = new Date();
const jour = date.getDay();
switch(jour){
    case 1 :
    console.log('Aujourdhui , cest lundi.' );
    break;
    case 2:
    console.log('aujourdhui, cest mardi');
    break;
    default : 
    console.log('aujourdhui, ce nest ni lundi, ni mardi');
}