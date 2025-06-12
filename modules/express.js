const express = require('express');
const UserModel = require('../src/models/user.model');
const nodemailer = require('nodemailer');
require('dotenv').config();

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

// atualizar usuario com patch
app.patch('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
        if (!user) {
            res.status(404).send({ message: 'User not found' });
        } else {
            res.status(200).send(user);
        }

    }
    catch (error) {
        res.status(400).send(error.message);
    }
});


const sendEmail = async (email, subject, message) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: message
    };

    await transporter.sendMail(mailOptions);
};

// Rota para enviar um email para o usuario de boa vindas
app.post('/users/:id/send-welcome-email', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id);
        if (!user) {
            res.status(404).send({ message: 'User not found' });
        } else {
            const email = user.email;
            const subject = 'Bem vindo ao sistema!';
            const text = 'Olá, você foi cadastrado com sucesso!';
            const html = `<h1> bem vindo ao sistema</h1>`;
            await sendEmail(email, subject, html);
            res.status(200).send({ message: 'Email sent' });
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
});


// Inicialização do servidor
app.listen(port, () => {
    console.log(`Servidor rodando: http://localhost:${port}`);
});
