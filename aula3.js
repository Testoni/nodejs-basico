var arquivo = require('fs');
var path = './novo.txt';

arquivo.readFile('./clubes.txt', function (erro, data) {
	if (erro) throw erro;
	console.log(data.toString());
});

arquivo.exists(path, function(resultado){
	if (!resultado) {
		arquivo.writeFile(path, 'Criando arquivo com nodejs', function(erro) {
			if (erro) throw erro;
			console.log('Arquivo criado com suceso');
		});
	} else {
		console.log('Arquivo encontra-se criado.')
	}
});

