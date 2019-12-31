const fs = require('fs');
const colors = require('colors')

let listadoPorHacer = [];

const gurdarDB = () => {

        let data = JSON.stringify(listadoPorHacer)

        fs.writeFile('db/data.json', data, (err) => {
            if (err) throw new Error('No se pudo grabar'.red, err);
        });
    }
    ///Metodo creado en la leccion 44 -Leer archivo json
const cargarDb = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDb();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    gurdarDB()
    return porHacer;
}

const getListado = () => {
    cargarDb();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDb();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        gurdarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    ///Para tomdo element o accion hay que que argar la base de datos , para saque el programa sepa qe borrar en este caso.
    cargarDb();


    ///nuevo arreglo                   filter : es una funcion d elos arreglso qeu me permite quitar o filtrar algun elemento en particular y esta funcion regresa un nuevo arreglo.
    let nuevoListado = listadoPorHacer.filter(tarea => {
        //Aqui retornamos todos los elementos que no coinciden o son diferentes del elemento que queremos borrar.
        return tarea.descripcion !== descripcion;
    });
    if (listadoPorHacer.length === nuevoListado.length) {
        //si las dos listas tienen el mismo largo , entonces no hizo el borrado
        return false

    } else {
        //En caso de que las lsitas tenga un largo diferente , entonces se hizo el borrado con Exito.
        listadoPorHacer = nuevoListado;
        gurdarDB();
        return true; //Para decir que la borro.
    }

}

module.exports = {

    crear,
    getListado,
    actualizar,
    borrar,

}