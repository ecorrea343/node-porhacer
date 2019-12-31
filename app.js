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

        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    case 'listar':
        //console.log('lista los elementos'.magenta);
        let listado = porHacer.getListado();

        for (let tarea of listado) {

            //console.table(listado);
            console.log('=============Por HACER=========='.green);
            console.log('Descripcion : ', tarea.descripcion);
            console.log('Estado      : ', tarea.completado);
            console.log('================================'.green);
        }

        break;

    default:
        console.log('Comando no reconocido'.bgRed);


}