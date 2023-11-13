const {input} = require('@inquirer/prompts');
const chalk = require('chalk');

(async function(){

    const n = await input({message : ' Saisissez un nombre?'});
    let premier
    let diviseurs = []
    // Verification

  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      diviseurs.push(i)
    }
  }
  if (diviseurs.length == 2) {
    premier = true
  }
  else {
    premier = false
  }
   // Resultat

   console.log(premier ? chalk.green(`${n} est un nombre premier`) : chalk.red(`${n} n'est pas un nombre premier`));
})()