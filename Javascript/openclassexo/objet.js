const {input} = require('@inquirer/prompts');

(async function(){

    
    (async function(){
    
        let ticket = [
            {
                nomFilm : "CONJURING",
                prix : 35,
                numSalles : 2
            },
            {
                nomFilm : "TINTIN",
                prix : 33,
                numSalles : 5
            }
        ]
    
        const film = await input({ message: 'entrer le nom d\'un film'});
    
        for (let i = 0; i < ticket.length; i++) {
            if(ticket[i]["nomFilm"] == film.toUpperCase()){
                console.log('film est dans la liste');
            }
            else  {
                console.log("Film pas dans la liste")
            }
        }
        
    })()
})()
