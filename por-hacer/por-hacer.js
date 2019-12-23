const fs = require('fs');


let listaPorHacer = [];

const gurdarDB = () => {

    let data = JSON.stringify(listaPorHacer)

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const crear = (descripcion) => {

    let porHacer = {
        descripcion,
        completado: false
    };
    listaPorHacer.push(porHacer);
    gurdarDB()
    return porHacer;
}

module.exports = {

    crear

}