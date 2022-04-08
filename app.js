
const { calculaIdade, calculaIMC } = require('./funcoes.js');

const anoNasc =  process.argv[2];
const idade = calculaIdade(anoNasc);
const peso = process.argv[3];
const altura = process.argv[4];
const IMC = calculaIMC(peso,altura);

console.log(`${idade} anos de idade`);
console.log(`${IMC} IMC`);