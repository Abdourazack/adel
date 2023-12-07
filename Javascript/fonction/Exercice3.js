// Exercice 3

//Écrire une fonction qui prend un tableau de nombres en entrée et renvoie le plus grand nombre dans le tableau.

const tableau = [25, 10, 33, 88, 60, 5, 45, 50, 74, 95,]

function valeur_max(tableau){
    let max=0;
for (i=0;i<tableau.length;i++){

    if(tableau[i]>max){
        max=tableau[i];
        console.log(tableau[i])
    } 
}
return max;
}
max=valeur_max(tableau);
console.log('le plus grand nombre du tableau est : ' + valeur_max(tableau))