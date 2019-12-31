const descripcion = {
    demand: true,
    alias: 'd',
    descripcion: 'Descripcion de la tarea por hacer'.green
}

const completado = {
    default: true,
    alias: 'c',
    descripcion: 'marca como completado la tarea'.green

}

const argv = require('yargs')


.command('crear', 'Elemento que crea las caracteristicas de nuestra aplicacion'.toLocaleUpperCase().yellow, {

    descripcion,
    completado,
})

.command('borrar', 'Elemento que Borra caracteristicas de nuestra aplicacion'.toLocaleUpperCase().yellow, {
    descripcion,
})

.command('actualizar', 'Elemento que actualizar caracteristicas de nuestra aplicacion'.toLocaleUpperCase().yellow, {

        descripcion,
        completado,
    })
    .help()
    .argv;

module.exports = {
    argv
}