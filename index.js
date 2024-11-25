const { registrar, leer } = require('./operaciones');

const [,, operacion, ...args] = process.argv;

if (operacion === 'registrar') {
    const [nombre, edad, animal, color, enfermedad] = args;
    registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === 'leer') {
    leer();
} else {
    console.log('Operación no reconocida. Usa "registrar" o "leer".');
}
