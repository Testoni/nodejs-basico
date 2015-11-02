zipper = require('zipper').Zipper;

var zipfile = zipper('./arquivo.zip');

zipfile.addFile('aula1.js', 'aula1.js', function (erro) {
	if (erro) throw erro;
	console.log('tudo ok');
})