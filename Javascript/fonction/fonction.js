// declaration de la fonction

/*function message(){
    //console.log('Mon Message') evite les console.log dans les fonction

    let message = 'hello'
   // return message + ' world' // avec la fonction concat

   return message.concat(' world')
}

console.log(message())
const m = message()
console.log(m)*/

// fonction d'addition

/*function addition(nb1, nb2){

  return nb1+nb2

}*/
/*const nb1 = 5
const nb2 = 10
//console.log(addition(nb2,nb1))
const result = addition(nb2,nb1)
const result2 =addition(10,577)
const add = addition(result,result2)
console.log(add)*/

//addition(5,10)


// expression de fonction

/*const addition2 = function (nb1, nb2){
    return nb1 + nb2
}

console.log(addition2(10 , 200))*/

// .Écrire une fonction qui prend deux nombres en entrée et renvoie leur somme.

const addition2 = (nb1, nb2) => {
    return nb1 + nb2
}

console.log(addition2(10 , 200))