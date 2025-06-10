const express = require('express');
const UserModel = require('../src/models/user.model');

const app = express();
const port = 3000;

// Middleware para habilitar JSON no body
app.use(express.json());

// Rota para criação de usuário
app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

//rota para buscar usuarios
app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// buscar usuario por id
app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);
        if (!user) {
            res.status(404).send({ message: 'User not found' });
        } else {
            res.status(200).send(user);

        }
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Deletar usuario
app.delete('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await UserModel.findByIdAndDelete(id);
        res.status(200).send({ message: 'User deleted' });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Atualizar usuario existente
app.put('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!user) {
            res.status(404).send({ message: 'User not found' });
        } else {
            res.status(200).send(user);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }

});

// Inicialização do servidor
app.listen(port, () => {
    console.log(`Servidor rodando: http://localhost:${port}`);
});
