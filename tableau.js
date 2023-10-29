// Tableau Vide

const t1 = [];
const t2 = Array();

// Tableau Vide

const t3 = ["pomme", "poire"];
const t4 = Array("pomme","poire");

// Pousser Des Infos dans le Tableau

t3.push("orange","banane","fraise");

// Récuperer des informations depuis le tableau

console.log(t3);
console.log('taille :', t3.length);
console.log('element 0 :', t3[0])
console.log('element 1 :', t3[1])
console.log('element 2 :', t3[2])
console.log('element 3 :', t3[3])
console.log('element 4 :', t3[4])

// Supprimer des elements

//t3.length = 4;
const elementsup=t3.splice(0,2);
console.log(t3);
console.log(elementsup);

//modifier une valeur dans un tableau

t3[0] = "cerise";
console.log(t3);