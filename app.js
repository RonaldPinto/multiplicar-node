let { argv } = require('./Config/yargs')

let { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case ('listar'):
        listarTabla(argv.base, argv.limite)
        break;

    case ('crear'):
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo ${archivo} creado`))
            .catch(e => console.log(e));

        break;

    default:
        console.log('Comando no reconocido');

}