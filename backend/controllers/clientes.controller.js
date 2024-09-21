/**

* Vamos a crear rutas del servidor

* creamos un módulo por eso utilizamos express

* vamos a utilizar como nuestra rest api para

* enviar y recibir datos en formato json

*/

const express = require('express');
const router = express.Router();
const clientesCtrl = require('./clientes.controllers'); // Asegúrate de que la ruta es correcta

// Ruta para obtener todos los clientes
router.get('/', clientesCtrl.getclientes); // Obtiene todos los clientes

// Ruta para crear un nuevo cliente
router.post('/', clientesCtrl.createclientes); // Guarda un nuevo cliente

// Ruta para obtener un cliente específico por ID
router.get('/:id', clientesCtrl.getUnicoclientes); // Obtiene un único cliente

// Ruta para actualizar un cliente específico por ID
router.put('/:id', clientesCtrl.editarclientes); // Actualiza datos de un cliente

// Ruta para eliminar un cliente específico por ID
router.delete('/:id', clientesCtrl.eliminarclientes); // Elimina un cliente

module.exports = router;