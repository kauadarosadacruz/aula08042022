function calculaIdade(anoNasc) {
	return 2022 - anoNasc 
}

module.exports.calculaIdade = calculaIdade;

module.exports.calculaIMC = function(peso,altura) {
	return peso / (altura * altura);
};