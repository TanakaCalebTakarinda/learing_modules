// creating a greet module


//bottom line is like a sript tag
//common to es
import all from "everyday-fun";
 
//es
import greet from './greet.js'
import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
console.log(chalk.blue.bgRed.bold('Hello world!'));

console.log(chalk.blue.bgRed.bold(greet('Xola')));

console.log(greet('Xola'))

console.log(all.getRandomRiddle());