var http = require('http');
var arquivo = require('fs');

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Hello World!</h1>");
	var txt = arquivo.createWriteStream('./logs.txt', {flags: 'a'});
	txt.write(request.url + '\n');
	response.end();
});

//server.listen(3000); // localhost

server.listen(3000, function() {
	console.log('Servidor Hello World rodando!');
});