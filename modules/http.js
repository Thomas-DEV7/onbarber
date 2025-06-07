const http = require('http');

const port = 8181;

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home Page</h1>');  // HTML corrigido
    }
    if(req.url === '/users'){
        const users = [
            // 4 usuarios com nome, email e idade
            {nome: 'João', email: 'joao@gmail.com', idade: 25},
            {nome: 'Maria', email: 'maria@gmail.com', idade: 30},
            {nome: 'Pedro', email: 'pedro@gmail.com', idade: 35},
            {nome: 'Ana', email: 'ana@gmail.com', idade: 40}
        ]

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users))
    }
});

server.listen(port, () => console.log(`Rodando na porta: http://localhost:${port}`));
