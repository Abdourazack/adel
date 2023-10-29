// afficher hello wordl numeroté
for(let i=0; i<10; i++){
    console.log(i + ' hello world');
    //console.log('hello world');
};

console.log('---------------------------------------');

//exo 2
//afficher les nombres suivants : 2 4 6 8 10 12
for(let i=0; i<=12; i+=2){
    console.log(`hello world ${i} `);
};

console.log('---------------------------------------------');


// exo 3 
//afficher la table multiplication de 
/*const nb1=5;

for(let i=1; i<=10; i++){
    console.log(`${i}`+ 'X' `${nb1}` +' = ' `${nb*i}`);
};*/
console.log('---------------------------------------------');

//exo 4
// afficher les nombre de 1 à 20
//et les nombre divible mettre les ms ce nombre est divisible par 3

for(let i=1; i<=20; i++){
    if(i%3==0){
        console.log( i + ' ce nombre est visible par 3');
}else{
    console.log(i);
}
}

console.log('---------------------------------------------');

//exo 5
//afficher tous les éléments à l'écran
//ensuite regarder si le code est bien penser en rajoutant un nouveau fruit, le code doit toujours fonctionner

const fruits = ["pomme","poire","kiwi","orange","cerise"];

for(let i = 0; i<fruits.length; i++) { 
    console.log(fruits[i]);
};