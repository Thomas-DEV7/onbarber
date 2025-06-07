const express = require('express');
const app = express();

app.get('/home', (req, res) => {
    res.contentType('application/html');
    res.status(200).send("<h1>teste</h1>");
});

app.get('/users', (req, res) => {
    res.contentType('application/json');
    const users = [
        { id: 1, name: 'João', age: 25 },
        { id: 2, name: 'Maria', age: 30 },
    ]
    res.status(200).send(users);
})

const port = 3000;

app.listen(port, () => console.log(`Rodando com express || http://localhost:${port}`));