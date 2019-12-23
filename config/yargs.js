const argv = require('yargs')


.command('crear', 'Elemento que crea las caracteristicas de nuestra aplicacion'.yellow, {
        descripcion: {
            demand: true,
            alias: 'd',
            descripcion: 'Descripcion de la tarea por hacer'.green
        },
        completado: {
            default: true,
            alias: 'c',
            descripcion: 'marca como completado la tarea'.green
        }

    })
    .command('actualizar', 'Elemento que actualizar caracteristicas de nuestra aplicacion'.yellow, {
        descripcion: {
            demand: true,
            alias: 'd',
            descripcion: 'Descripcion de la tarea por hacer'.green
        },
        completado: {
            default: true,
            alias: 'c',
            descripcion: 'marca como completado la tarea'.green
        }

    })
    .help()
    .argv;

module.exports = {
    argv
}