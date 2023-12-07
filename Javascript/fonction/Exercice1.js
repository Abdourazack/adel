
//Exercice1
//Écrire une fonction qui prend un tableau de nombres en entrée et renvoie la somme de tous les éléments du tableau.

const nombre =[
    10, 20, 30, 88, 33
]

const tab = function(nombre){
    let sumtab = 0
    for( let i = 0 ; i<nombre.length; i++){
        console.log(nombre[i])
        sumtab += nombre[i]
    }
    return sumtab
}
console.log(tab(nombre))


//Autre solution

/*const nombres = [10, 20, 30, 88, 33]
function add (nombres){
    let somme = 0 
    nombres.forEach((value)=> {
        somme += value
    });
    return somme
}
console.log(add(nombres))*/