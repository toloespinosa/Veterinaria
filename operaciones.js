const fs = require('fs');


function registrar(nombre, edad, animal, color, enfermedad) {
    const nuevaCita = { nombre, edad, animal, color, enfermedad };

    
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        
        const citas = JSON.parse(data);

        // Agregar la nueva cita
        citas.push(nuevaCita);

        // Escribir de nuevo en el archivo
        fs.writeFile('citas.json', JSON.stringify(citas, null, 2), (err) => {
            if (err) {
                console.error('Error al guardar la cita:', err);
            } else {
                console.log('¡Cita registrada con éxito!');
            }
        });
    });
}

// Función para mostrar la cita
function leer() {
    fs.readFile('citas.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo:', err);
            return;
        }

        // Mostrar las citas en la consola
        const citas = JSON.parse(data);
        console.log('Citas registradas:', citas);
    });
}

module.exports = { registrar, leer };
