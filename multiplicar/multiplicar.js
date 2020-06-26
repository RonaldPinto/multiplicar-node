const fs = require('fs');

let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i}\n`);

    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        let tabla = '';

        for (let i = 1; i <= limite; i++) {

            tabla += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`Tablas/tabla-${base}.txt`, tabla, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)

        });

    })
}

module.exports = {
    crearArchivo,
    listarTabla

}