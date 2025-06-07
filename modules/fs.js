const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, '/test'), (error) => {
//     if (error) {
//         return console.log(error);
//     }

//     console.log("Pasta criada com sucesso!")
// });


// fs.writeFile(path.join(__dirname, '/test', 'arquivo.txt'), 'Conteúdo do arquivo', (error) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log('Arquivo criado com sucesso!')

// });

// fs.appendFile(path.join(__dirname, '/test', 'arquivo.txt'), '  adicionar texto', (error) => {
//     if (error) {
//         return console.log(error);
//     }
//     console.log('Arquivo atualizado com sucesso!')

// });

fs.readFile(path.join(__dirname, '/test', 'arquivo.txt'), 'utf8', (error, data) => {
    if (error) {
        return console.log(error);
    }
    console.log(data);
});