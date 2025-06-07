const path = require('path');

// Apenas o nome do arquivo atual
console.log(path.basename(__filename))


// Nome do diretorio atual
console.log(path.dirname(__filename))

// Extensão do arquivo
console.log(path.extname(__filename))

// Criar um objeto path
console.log(path.parse(__filename))

// Juntar caminho de arquivos
console.log(path.join(__dirname, 'arquivo.txt')) // __dirname é o caminho do