import { parse } from 'query-string';
import * as url from 'url';
import { writeFile, readFile, unlink } from 'fs';
import { createServer, IncomingMessage, ServerResponse } from 'http';

// Definição de porta
const port = 5000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
  const urlparse = url.parse(request.url ? request.url : '', true);
  const params = parse(urlparse.search ? urlparse.search : '');
  var resposta: any;

  if (urlparse.pathname === "/criar-atualizar-usuario") {

    writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err: any) {
      if (err) throw err;
      console.log('Saved');
      resposta = 'Usuario criado/atualizado com sucesso!'

      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.end(resposta);
    });
  }
  // Seleciona usuario
  else if (urlparse.pathname == '/selecionar-usuario') {
    readFile('users/' + params.id + '.txt', function (err, data) {
      resposta = data ? data : 'Usuario nao encontrado';

      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.end(resposta);
    });
  }
  // Deleta usuario
  else if (urlparse.pathname == '/remover-usuario') {
    unlink('users/' + params.id + '.txt', function (err) {
      console.log('File deleted');

      resposta = err ? 'Usuario nao encontrado' : 'Usuario removido.';

      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.end(resposta);
    });
  }
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})