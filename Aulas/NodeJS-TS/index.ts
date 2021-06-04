import { parse } from 'query-string';
import * as url from 'url';
import { writeFile } from 'fs';
import { createServer, IncomingMessage, ServerResponse } from 'http';

// Definição de porta
const port = 5000;

const server = createServer((request: IncomingMessage, response: ServerResponse) => {
  const urlparse = url.parse(request.url ? request.url : '', true);
  const params = parse(urlparse.search ? urlparse.search : '');
  var resposta: string;

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
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`)
})