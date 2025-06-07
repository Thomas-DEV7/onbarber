const fs = require('fs');
const path = require('path');

fs.mkdir(path.join(__dirname, '/test'), (error) => {
    if (error) {
        return console.log(error);
    }

    console.log("Pasta criada com sucesso!")
});

