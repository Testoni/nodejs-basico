var http = require('http'),
	arquivo = require('fs');

var server = http.createServer(function(request, response){

	response.writeHead(200, {"Content-Type": "text/html"});

	if (request.url == '/') {
		arquivo.readFile(__dirname + '/index.html', function(erro, data){
			if (erro) response.write('Arquivo nao encontrado.');
			response.write(data);
			reponse.end();		
		});	
	} else if (request.url == '/contatos'){
		arquivo.readFile('./contatos.html', function(erro, data){
			if (erro) response.write('Arquivo nao encontrado.');
			response.write(data);
			reponse.end();
			reponse.end();
		});	
	} else {
		reponse.write('Pagina nao encontrada');
		reponse.end();
	}
});

server.listen(3000, function(){
	console.log('Servidor rodando!');
});