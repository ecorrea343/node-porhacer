//const argv = require('yargs').argv
const colors = require('colors')
const argv = require('./config/yargs').argv

const porHacer = require('./por-hacer/por-hacer')

let comando = argv._[0]

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;
    case 'actualizar':
        console.log('Actualizacion por hacer'.blue);
        break;
    case 'listar':
        console.log('lista los elementos'.magenta);
        break;
    default:
        console.log('Comando no reconocido'.bgRed);
}