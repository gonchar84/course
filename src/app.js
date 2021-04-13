// const chalk = require('chalk');
// const log = console.log;


let firstName = 'Igor';
let lastName = '   Maslakov   ';
 
// charAt(index)
// const symb = firstName.charAt(0);
// console.log('Char at 0:', symb);
// concat
// const fullName = firstName.concat(' ', lastName);
// console.log(fullName)
const fullNamePlus = firstName + ' ' + lastName;
// console.log('+: ', fullNamePlus);
const fullNameTemplate = `${firstName} ${lastName}`;
// console.log('fullNameTemplate: ', fullNameTemplate);

const data = [];
data.push(firstName);
data.push('maslakoff');
data.push(lastName);


// log(chalk.blue('data:'), data)

const result = data
.filter(elememt => typeof elememt === 'string')
.map(item => item.trim())
.join(' ');
console.log('Parcel is awesome!')

// const filteredData = data
// .filter(elememt => typeof elememt === 'string');

// const trimmedData = filteredData.map(item => item.trim());

// const finalResult = trimmedData.join(' ');

// console.log(chalk.red('string data:'), result)
// indexOf
// includes (es6)
// replace
// toUpperCase
// console.log('Upper:', firstName.toUpperCase());
// toLowerCase, 
// console.log('Lower:', lastName.toLowerCase());
// trim, 
// console.log('trim:', lastName.trim());
// split, 
// const bill = '10$ 20$ 55$';
// const billsArray = bill.split('$ ');
// console.log('billsArray: ', billsArray)
// lastIndexOf, 
// slice, 
// substring(start, end), 
// substr(start, length), 
// startsWith (es6), 
// endsWith (es6), 
// repeat (es6), 