//Exercice 4

//Écrire une fonction qui prend un nombre en entrée et renvoie true si le nombre est pair, et false s'il est impair.
const nombre = 15
const impaire = function(){

    

    if(nombre % 2 == 1 ){
        console.log('true')
    }else{
        console.log('false')
    }
    return nombre
}
console.log(impaire(nombre))