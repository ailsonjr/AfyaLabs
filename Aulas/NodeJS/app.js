// Incluindo uma biblioteca
const http = require('http');
const url = require('url');
const queryString = require('query-string');
const fs = require('fs');


// Definição de endereço / URL
const hostname = '127.0.0.1'; // localhost
const port = 3000;

// Implementeção da regra de negócio
const server = http.createServer((req, res) => {
  let resposta;
  const urlParse = url.parse(req.url, true);
  // Receber informações do usuário
  const params = queryString.parse(urlParse.search);

  // Criar usuario - atualizar usuario
  if (urlParse.pathname == '/criar-atualizar-usuario') {
    // Salvar as informações
    fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err) {
      if (err) throw err;
      console.log('Saved');

      resposta = 'Usuario criado com sucesso!'

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });
  }
  // Seleciona usuario
  else if (urlParse.pathname == '/selecionar-usuario') {
    fs.readFile('users/' + params.id + '.txt', function (err, data) {
      resposta = data;

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });
  }
  // Deleta usuario
  else if (urlParse.pathname == '/remover-usuario') {
    fs.unlink('users/' + params.id + '.txt', function (err) {
      console.log('File deleted');

      resposta = err ? 'Usuario nao encontrado' : 'Usuario removido.';

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
    });
  }
});

// Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});